import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[type="email"');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form');
const FEEDBACK_FORM = 'feedback-form-state';

let feedbackData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};

const recoverData = () => {
  emailInput.value = feedbackData.email || '';
  messageInput.value = feedbackData.message || '';
};

recoverData();

const updateFeedbackData = event => {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedbackData));
};
const onFormSubmitting = event => {
  event.preventDefault();

  console.log(feedbackData);

  localStorage.removeItem(FEEDBACK_FORM);
  event.currentTarget.reset();
  feedbackData = {};
};

form.addEventListener('input', throttle(updateFeedbackData, 500));
form.addEventListener('submit', onFormSubmitting);
