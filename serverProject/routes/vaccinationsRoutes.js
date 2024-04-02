import express from "express";
 import {AddNewVaccination,ShowUserVaccinations,ShowUserVaccinationsNum} from "../controllers/vaccinationsController.js"

const router = express.Router();
 router.route("/AddVaccination").post(AddNewVaccination);
 router.route("/GetUserVaccinations").post(ShowUserVaccinations);
 router.route("/ShowUserVaccinationsNum").post(ShowUserVaccinationsNum);

// router.route("/getNumPeopleDidntGetYet").get(getNumPeopleDidNotGet);

export default router