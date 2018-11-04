export default {

  getQuestionnairePath(digest_key) {
    return `/user_questionnaires/${digest_key}`;
  },

  postQuestionnairePath(digest_key) {
    return `/questionnaire_submissions/${digest_key}/submit`;
  }
  
}
