const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.addMessage = functions.https.onCall(async (data, context) => {
  try {
    logger.log("Received Message request Data:", data);

    if (!data.text || !data.UserId) {
      logger.log("Required fields (text or UserId) are missing");
      throw new functions.https.HttpsError(
          "invalid-argument",
          "Required fields (text or UserId) are missing",
      );
    }

    const {text, UserId} = data;

    const messageData = {
      text,
      UserId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    const messageRef = await admin
        .firestore()
        .collection("chats")
        .doc(UserId)
        .collection("messages")
        .add(messageData);

    logger.log("Message added successfully, Message ID:", messageRef.id);
    return {status: "success", messageId: messageRef.id};
  } catch (error) {
    logger.error("Error adding message:", error);
    throw new functions.https.HttpsError(
        "unknown",
        "An error occurred while adding the message",
        error.message,
    );
  }
});
