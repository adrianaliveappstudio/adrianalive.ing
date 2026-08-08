const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://titanium-genre-213714-default-rtdb.firebaseio.com"
});

const db = admin.database();
const auth = admin.auth();

async function run() {
  console.log("🔥 ADMIN SCRIPT RUNNING");

  // Force logout all users
  const list = await auth.listUsers();
  for (const user of list.users) {
    await auth.revokeRefreshTokens(user.uid);
    console.log("  ✅ LOGGED OUT:", user.email);
  }

  // Set security
  await db.ref('security').set({
    admin_password: { password: "Adrianalive2026!Secure", status: "ACTIVE" },
    access_control: {
      status: "LOCKED_DOWN",
      authorizedUsers: ["adriana.monetory@gmail.com","clrv.riana.entity@gmail.com","rixifacebook@gmail.com","turbulliongroup@gmail.com"],
      allOthers: "BLOCKED"
    }
  });

  // Block OAuth
  await db.ref('blocked').set({
    oauth238915: { status: "BLOCKED" },
    users: {
      "propex4@gmail.com": "BLOCKED",
      "rianav28@gmail.com": "BLOCKED",
      "adrianasamusic@gmail.com": "BLOCKED",
      "rianav@live.com": "BLOCKED"
    }
  });

  // Set ownership
  await db.ref('ownership').set({
    owner: { name: "Johanna Sophia Adriana Venter", id: "7606170018086", status: "ENFORCED" },
    patent: "CLRV TITANIUM BLOCKCHAIN BLOCKSTREAM OVERRIDE PROTOCOL"
  });

  // Set .ing domains
  await db.ref('domains/ing').set({
    "adrianalive.ing": { status: "CLAIMED" },
    "auth.ing": { status: "CLAIMED" },
    "adrianalive@ing": { status: "CLAIMED" },
    "adriana@microsoft.ing": { status: "CLAIMED" }
  });

  // Activate surveillance
  await db.ref('surveillance').set({
    status: "ACTIVE",
    date: "2023-08-04",
    activatedBy: "adriana.monetory@gmail.com"
  });

  console.log("✅ ALL DATA SET");
}
run().catch(console.error);
