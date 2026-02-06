import eventvalidation from "../assets/eventvalidation.png";
import logcapturer from "../assets/logcapturer.png";
import integratorandroid from "../assets/integratorandroid.png";
import contactactivityextension from "../assets/contactactivityextensio.png";
import pushnotification from "../assets/pushnotification.png";

export const apps = [
  {
    id: "event-validation",
    name: "Event Validation",
    description:
      "Validate Events and the Payloads with the event sheet",
    href: "https://validation-script-android-1.onrender.com/",
    image: eventvalidation,
    tag: "Integration",
     github: "https://github.com/allenThomsonNetcore/validation_script_android"
  },
  {
    id: "log-capturer",
    name: "Android iOS Log Capturer",
    description:
      "Live status dashboards for Capturing the logs without copy-pasting the logs from the terminal.",
    href: "https://drive.google.com/drive/folders/1kgwDyYvCNc0r0cWQbjvybAG9hNIuj0_3?usp=sharing",
    image: logcapturer,
    tag: "Integration",
  },
  {
    id: "smartech-sdk-integrator",
    name: "Smartech SDK Integrator(Android - Flutter, React Native)",
    description:
      "Smartech SDK Integrator for Android Flutter and React Native. Native Android coming soon.",
    href: "https://drive.google.com/drive/folders/1k9JbfwWc8-QBaYAiiHnzAgelmeOZRSJg?usp=drive_link",
    image: integratorandroid,
    tag: "Integration",
     github: "https://github.com/Allono07/reactnativesmartechautomation"
  },
  {
    id: "contact-activity-api-extension",
    name: "Activity and Contact API Extension",
    description:
      "Chrome Extenstion to trigger activity (with csv support) and contact",
    href: "https://drive.google.com/drive/folders/1moYOZY2iXm17DxUT95Gi3ecDhdohmJQB?usp=sharing",
    image: contactactivityextension,
    tag: "API",
    github: "https://github.com/Allono07/contact_api_plugin"
  },
  {
    id: "push-notfication-api-android",
    name: "Trigger Push Notification API for Android",
    description:
      "Push Notification API trigger for Android with support for custom payload",
    href: "https://validation-script-android-1.onrender.com/push-notification",
    image: pushnotification,
    github: "https://github.com/allenThomsonNetcore/validation_script_android",
    tag: "Campaigns",
  }
];
