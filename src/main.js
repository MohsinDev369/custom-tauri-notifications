const { isPermissionGranted, requestPermission, sendNotification } =
  window.__TAURI__.notification;

  //ask for permission for notification
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === "granted";
}
  
let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  if (permissionGranted) {
    sendNotification({ title: "mohsinDev369", body: greetInputEl.value });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#toast-input");
  greetMsgEl = document.querySelector("#toast-msg");
  document
    .querySelector("#toast-button")
    .addEventListener("click", () => greet());
});



