export const Notify =
  (message, dimissTime = 5000) =>
  (dispatch) => {
    dispatch(notificationAction.enque_notification(message));
    setTimeout(() => {
      dispatch(notificationAction.deque_notification());
    }, dimissTime);
  };
