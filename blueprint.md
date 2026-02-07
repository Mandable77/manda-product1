# Blueprint

## Overview

A modern, stylish web application that acts as a "Pronunciation Coach." Users can practice their pronunciation of English and Korean sentences. The app will use the browser's built-in speech recognition to analyze the user's speech and provide a pronunciation accuracy score.

## Implemented Features

*   **Modern UI:** A complete redesign of the application to be more stylish and user-friendly, with a dark theme and modern aesthetics.
*   **Random Sentence Generation:** The application will display random sentences for the user to practice, with options for English and Korean. Sentences will cover both everyday and business contexts.
*   **Speech Recognition:** The application will use the Web Speech API to listen to the user's pronunciation of the displayed sentence.
*   **Pronunciation Accuracy Score:** The app will calculate and display a score based on the confidence level of the speech recognition result.

## Current Plan: Bug Fixes and Visual Overhaul

**Objective:** Fix all non-working buttons and implement a more vibrant, colorful, and stylish design.

1.  **Update `style.css`:**
    *   Introduce a new, vibrant color palette with gradients and more accent colors.
    *   Add a multi-layered `box-shadow` to create a "lifted" card effect for the main container.
    *   Improve button interactivity with enhanced hover effects and animations.
    *   Use a more expressive and readable typography.
    *   Add a subtle background texture for a premium feel.

2.  **Update `index.html`:**
    *   Add a dedicated element to display status messages and error feedback to the user (e.g., for microphone permissions).

3.  **Update `main.js`:**
    *   Debug and ensure all event listeners for buttons (Language Select, New Sentence, Record) are working correctly.
    *   Implement robust error handling for the Speech Recognition API, providing clear feedback to the user if the API is not supported or if microphone permissions are denied.
    *   Add visual feedback during the recording state to make it more intuitive.

## Completed Tasks

*   **Code Upload to GitHub:** All current working code has been successfully uploaded to `https://github.com/Mandable77/manda-product1`.