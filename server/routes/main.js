const express = require("express");
require("dotenv").config();
const router = express.Router();
require("dotenv").config();

// Controllers
const checkoutController = require("../controllers/checkout");
const requestController = require("../controllers/request");
const membershipController = require("../controllers/membership");
const guestController = require("../controllers/guest");

const vendorController = require("../controllers/vendor")
const testController = require("../controllers/test")
const misconfigController = require("../controllers/misconfig")
const domainController = require("../controllers/domain")
const assetsController = require("../controllers/assets")

const breachesController = require("../controllers/breaches")
const encryptionController = require("../controllers/encryption")
const newassetsController = require("../controllers/newassets")


router.get("/test", (req, res) => {
  res.send("Working");
});

//s3 listvideos endpoint
// router.get('/listvideos/', aws_con.listVideos);

// Adding to cart i.e. checkout
router.post("/addtocheckout", checkoutController.addcheckout);
router.delete("/delallcheckouts/:uid", checkoutController.delallcheckouts);

// Adding request
router.post("/addrequest", requestController.addRequest);

//Adding Membership
router.post("/memberships", membershipController.addMembership);
router.get("/memberships", membershipController.getMembership);
router.delete("/memberships/:id", membershipController.deleteMembership);
router.put("/memberships/:id", membershipController.updateMembership);
router.get("/memberships/:id", membershipController.getspeceficMembership);
router.post("/addGuest", guestController.addGuest);
router.post("/getGuests", guestController.getGuests);

router.post("/vendors", vendorController.addVendor);
router.get("/vendors", vendorController.getVendor);
router.delete("/vendors/:id", vendorController.deleteVendor);
router.put("/vendors/:id", vendorController.updateVendor);
router.get("/vendors/:id", vendorController.getspeceficVendor);

router.get("/tests", testController.getTest);
router.post("/tests", testController.addTest);
router.delete("/tests/:id", testController.deleteTest);


router.get("/misconfig", misconfigController.getMisconfig);
router.post("/misconfig", misconfigController.addMisconfig);
router.delete("/misconfig/:id", misconfigController.deleteMisconfig);

router.get("/domain", domainController.getDomain);
router.post("/domain", domainController.addDomain);
router.delete("/domain/:id", domainController.deleteDomain);
router.put("/domain/:id", domainController.updateDomain);

router.get("/assets", assetsController.getAsset);
router.post("/assets", assetsController.addAsset);
router.delete("/assets/:id", assetsController.deleteAsset);

router.get("/breaches", breachesController.getBreaches);
router.post("/breaches", breachesController.addBreaches);
router.delete("/breaches/:id", breachesController.deleteBreaches);

router.get("/encryption", encryptionController.getEncryption);
router.post("/encryption", encryptionController.addEncryption);
router.delete("/encryption/:id", encryptionController.deleteEncryption);

router.get("/newassets", newassetsController.getNewassets);
router.post("/newassets", newassetsController.addNewassets);
router.delete("/newassets/:id", newassetsController.deleteNewassets);

module.exports = router;
