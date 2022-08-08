import {Profile} from "../../models/Profile";
import {BaseApiEios} from "./BaseApiEios";

export class ProfileEios extends BaseApiEios {
    path = '../profile.json';
    model = Profile;
}