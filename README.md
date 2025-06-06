# creditop-tech-test

Test tech about layout and construction of a small screen flow used in a credit application.

## Technical Test Documentation

This document describes the development process for the technical test, focusing on the layout, building, and connection of functional screens within a simple web application simulating a credit application flow.

### Project Structure

The project is structured using Next.js, with core application logic and pages located in the `src/app` directory and reusable components in the `src/lib` directory.

- **`/src/app/(home)`**: Contains the main application page (`page.tsx`) which implements the stepper component to manage the flow between the three screens. This directory also includes utility functions, constants, types, and interfaces specific to the home page and the credit application flow. Subdirectories within `(home)` like `components` house the individual screen components (`identityStep`, `summaryStep`, `termStep`).
- **`/src/lib`**: Contains reusable UI components used throughout the application. This includes components like `button`, `card`, `checkbox`, `dialog`, `select`, and `stepper`. Each component directory typically contains the component file (`.tsx`), interfaces (`.ts`), and potentially hooks or other related files.

### Stepper Implementation

The core navigation and flow management is handled by a custom `Stepper` component located in `/src/lib/stepper/stepper.tsx`. This component takes an array of steps as input, each representing a screen in the flow. The `useStepper` hook (`/src/lib/stepper/hooks/useStepper.tsx`) manages the current step, provides functions to navigate between steps (next, previous), and handles the overall state of the stepper.

### Screen Development

Three main screens were developed as components within the `/src/app/(home)/components` directory:

1.  **Identity Step (`/src/app/(home)/components/identityStep/identityStep.tsx`)**: This screen is responsible for capturing the identity document expedition date. It utilizes input components from the `lib` directory and handles validation as required.
2.  **Term Step (`/src/app/(home)/components/termStep/termStep.tsx`)**: This screen allows the user to select their preferred monthly credit payment date. It likely uses a select or date picker component from the `lib` directory.
3.  **Summary Step (`/src/app/(home)/components/summaryStep/summaryStep.tsx`)**: This is a free design screen that displays a summary of the information entered in the previous steps (expedition date and payment date). It retrieves the data from the shared state managed by the stepper or a context API and presents it to the user.

### Data Flow

Data entered by the user in the Identity and Term steps is managed and shared between the steps. This is likely achieved through a shared state within the `page.tsx` component that renders the `Stepper`, or by utilizing React's Context API for more complex state management. The Summary step then accesses this shared state to display the collected information.

### Reusable Components

The `src/lib` directory contains a set of reusable components designed to be generic and usable across different parts of the application. These components promote code reusability and maintainability. Examples include `Button`, `Card`, `Checkbox`, `Dialog`, and `Select`. Each component is developed with its own interfaces to define its props and types.

### Development Process

The development followed an iterative approach:

1.  **Setup**: Project initialization with Next.js and basic configuration.
2.  **Component Development**: Building individual reusable components in the `lib` directory.
3.  **Stepper Implementation**: Developing the `Stepper` component and the `useStepper` hook to manage the flow.
4.  **Screen Development**: Creating the three required screen components, utilizing the reusable components from `lib`.
5.  **Integration**: Integrating the screens into the `Stepper` component within the `page.tsx`.
6.  **State Management**: Implementing state management to share data between the steps.
7.  **Styling**: Applying CSS for layout and visual presentation.
8.  **Refinement**: Testing and refining the user flow and component functionality.

This approach allowed for modular development and easier testing of individual components before integrating them into the complete flow.
