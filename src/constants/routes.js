const API = "http://api.checkup.vip/v1";
const PREFIX = (process.env.NODE_ENV === "production") ? API : "";

import path from "path";

export default {

  getQuestionnairePath(digest_key) {
    return `${PREFIX}/questionnaire_submissions/${digest_key}`;
  },

  postQuestionnairePath(digest_key) {
    return `${PREFIX}/questionnaire_submissions/${digest_key}/submit`;
  }


}
