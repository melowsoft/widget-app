# Widget App

This is a simple React application for managing tasks grouped into categories. The app utilizes components such as `Accordion`, `TaskGroup`, and `Task` to organize and display the tasks. It also includes a progress bar to visualize the completion progress of the tasks.

## Features

- View tasks grouped into categories.
- Toggle the completion status of individual tasks.
- Track progress with a progress bar.

## Components

### `Accordion`

The `Accordion` component is responsible for rendering a list of task groups. It can expand and collapse each task group to show or hide the tasks within.

### `TaskGroup`

The `TaskGroup` component represents a group of tasks. It contains a header that displays the group name and an expand/collapse button. When expanded, it displays the individual tasks using the `Task` component.

### `Task`

The `Task` component represents an individual task. It displays the task description and a checkbox to indicate its completion status.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/melowsoft/widget-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd widget-app
    ```

3. Install dependencies:

    ```bash
    yarn 
    ```

## Usage

To run the application locally, use the following command:

```bash
yarn start
