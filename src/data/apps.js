import eventvalidation from "../assets/eventvalidation.png";
import logcapturer from "../assets/logcapturer.png";
import integratorandroid from "../assets/integratorandroid.png";
import contactactivityextension from "../assets/contactactivityextensio.png";
import pushnotification from "../assets/pushnotification.png";
import walkthrough from "../assets/walkthrough.png";
import loggerapp from "../assets/loggerapp.png";
import eventlibrary from "../assets/eventlibrary.png";


export const apps = [
  {
    id: "event-validation",
    name: "Event Validation",
    description:
      "Validate Events and the Payloads with the event sheet",
    href: "https://validation-script-android.onrender.com/",
    image: eventvalidation,
    tag: "Integration",
     github: "https://github.com/allenThomsonNetcore/validation_script_android"
  },
  {
    id: "android-ios-walkthrough",
    name: "Walkthrough for Android and iOS SDK Integration",
    description:
      "Walkthrough for Android and iOS SDK Integration with code snippets and video guides.",
      href:"https://laxmii12.github.io/IntegrationWalkthrough_Android_CE/",
  links: [
      {
        label: "Android",
        href: "https://laxmii12.github.io/IntegrationWalkthrough_Android_CE/",
      },
      {
        label: "iOS",
        href: "https://laxmii12.github.io/IntegrationWalkthrough_iOS_CE/",
      },
    ],
    image: walkthrough,
    tag: "Walkthrough",
  },
  {
    id: "event-library",
    name: "event-library",
    description:
      "Create Event Library to manage and maintain all the events in one place with ease of access and documentation.",
    href: "https://eventlibrarybuilder.netlify.app/",
    image: eventlibrary,
    tag: "onboarding"
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
  },

  {
    id: "logger-app-android",
    name: "Android Logger App (Local)",
    description:
      "Android App to capture logs locally on android device without connecting to a computer",
    href: "https://drive.google.com/drive/folders/1qDihHPQ1eOZH4-iXuS30G5nbmK28anMy?usp=sharing",
    image: loggerapp,
    tag: "Integration",
    tutorialSteps: [
      "Install the APK on your Android device.",
            "Connect to the computer for once and execute the command: adb shell pm grant com.example.myapplication android.permission.READ_LOGS",
      "Open the Logger App and grant the requested permissions.",
      "Start a logging session to capture device logs locally.",

      "Export or share the log file when finished.",
    ],
  }
  
];
