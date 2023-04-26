const { isPermissionGranted, requestPermission, sendNotification } =
  window.__TAURI__.notification;

let greetInputEl;
let greetMsgEl;

async function handleSendNotification() {
  //ask for permission for notification
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === "granted";
  }
  if (permissionGranted) {
    sendNotification({ title: "mohsinDev369", body: greetInputEl.value });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#toast-input");
  greetMsgEl = document.querySelector("#toast-msg");
  document
    .querySelector("#toast-button")
    .addEventListener("click", () => handleSendNotification());
});
