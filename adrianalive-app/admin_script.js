const admin = require('firebase-admin');

// Initialize with application default credentials
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://titanium-genre-213714-default-rtdb.firebaseio.com"
});

const db = admin.database();
const auth = admin.auth();

console.log("==========================================");
console.log("🔥 ADMIN SCRIPT RUNNING");
console.log("==========================================");

async function run() {
  try {
    // 1. FORCE LOGOUT ALL USERS
    console.log("\n🔴 FORCE LOGOUT ALL USERS...");
    const list = await auth.listUsers();
    for (const user of list.users) {
      await auth.revokeRefreshTokens(user.uid);
      console.log("  ✅ LOGGED OUT:", user.email);
    }

    // 2. SET SECURITY DATA
    console.log("\n🔒 SETTING SECURITY DATA...");
    await db.ref('security/admin_password').set({
      password: "Adrianalive2026!Secure",
      created: "2023-08-04",
      createdBy: "adriana.monetory@gmail.com",
      status: "ACTIVE"
    });

    await db.ref('security/access_control').set({
      status: "LOCKED_DOWN",
      authorizedUsers: [
        "adriana.monetory@gmail.com",
        "clrv.riana.entity@gmail.com",
        "rixifacebook@gmail.com",
        "turbulliongroup@gmail.com"
      ],
      allOthers: "BLOCKED",
      date: "2023-08-04"
    });

    // 3. BLOCK OAUTH
    console.log("\n🔴 BLOCKING OAUTH...");
    await db.ref('blocked/oauth238915').set({
      status: "BLOCKED",
      date: "2023-08-04",
      reason: "FRAUD_DETECTED"
    });

    // 4. BLOCK USERS
    console.log("\n🔴 BLOCKING UNAUTHORIZED USERS...");
    await db.ref('blocked/users').set({
      "propex4@gmail.com": "BLOCKED",
      "rianav28@gmail.com": "BLOCKED",
      "adrianasamusic@gmail.com": "BLOCKED",
      "rianav@live.com": "BLOCKED"
    });

    // 5. SET OWNERSHIP
    console.log("\n📜 SETTING OWNERSHIP PROOF...");
    await db.ref('ownership/owner').set({
      name: "Johanna Sophia Adriana Venter",
      email: "adriana.monetory@gmail.com",
      id: "7606170018086",
      date: "2023-08-04",
      status: "ENFORCED"
    });

    await db.ref('ownership/patent').set({
      title: "CLRV TITANIUM BLOCKCHAIN BLOCKSTREAM OVERRIDE PROTOCOL",
      priorityDate: "2025-08-02",
      priorityCountry: "South Africa",
      inventor: "Johanna Sophia Adriana Venter"
    });

    // 6. SET .ING DOMAINS
    console.log("\n🌐 SETTING .ING DOMAINS...");
    await db.ref('domains/ing').set({
      "adrianalive.ing": { status: "CLAIMED", owner: "adriana.monetory@gmail.com", date: "2023-08-04" },
      "auth.ing": { status: "CLAIMED", owner: "adriana.monetory@gmail.com", date: "2023-08-04" },
      "adrianalive@ing": { status: "CLAIMED", owner: "adriana.monetory@gmail.com", date: "2023-08-04" },
      "adriana@microsoft.ing": { status: "CLAIMED", owner: "adriana.monetory@gmail.com", date: "2023-08-04" }
    });

    // 7. ACTIVATE SURVEILLANCE
    console.log("\n🎥 ACTIVATING SURVEILLANCE...");
    await db.ref('surveillance/active').set({
      status: "ACTIVE",
      date: "2023-08-04",
      activatedBy: "adriana.monetory@gmail.com"
    });

    // 8. SET AZURE LINKS
    console.log("\n☁️ SETTING AZURE LINKS...");
    await db.ref('azure/connections').set({
      subscription: "0b8fc41c-e3a4-4e41-8349-e7b68f9571ad",
      owner: "a3capsulevault@outlook.com",
      ownerId: "3147ce85-d818-44b1-a6a1-20ddb08c1b4f",
      resources: {
        "AdrianaliveRFIDDjAppInvention": { type: "App Service", group: "CreativeliveAdrianaliveDJAPP", firebaseLinked: true },
        "capsule-original": { type: "App Service", group: "CapsuleRG", firebaseLinked: true },
        "Microsoft-adrianamedia": { type: "App Service", group: "adrianalive.app_group", firebaseLinked: true }
      },
      status: "LINKED"
    });

    console.log("\n==========================================");
    console.log("✅ COMPLETE - ALL DATA SET");
    console.log("==========================================");
    console.log("\n🔐 SECURITY:");
    console.log("  ✅ Admin Password: SET");
    console.log("  ✅ Access Control: LOCKED_DOWN");
    console.log("  ✅ All Users: FORCE LOGGED OUT");
    console.log("  ✅ OAuth: BLOCKED");
    console.log("  ✅ Surveillance: ACTIVE");
    console.log("\n📜 OWNERSHIP:");
    console.log("  ✅ Owner: Johanna Sophia Adriana Venter");
    console.log("  ✅ ID: 7606170018086");
    console.log("  ✅ Patent: CLRV TITANIUM BLOCKCHAIN");
    console.log("\n🌐 DOMAINS:");
    console.log("  ✅ adrianalive.ing");
    console.log("  ✅ auth.ing");
    console.log("  ✅ adrianalive@ing");
    console.log("  ✅ adriana@microsoft.ing");
    console.log("\n👤 AUTHORIZED USERS (ONLY):");
    console.log("  ✅ adriana.monetory@gmail.com");
    console.log("  ✅ clrv.riana.entity@gmail.com");
    console.log("  ✅ rixifacebook@gmail.com");
    console.log("  ✅ turbulliongroup@gmail.com");
    console.log("\n🔐 DIGITAL SOVEREIGNTY ENFORCED");
    console.log("==========================================");

  } catch (error) {
    console.error("❌ ERROR:", error.message);
  }
}

run();
