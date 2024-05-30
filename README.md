# Sales Agent Dashboard Development
#### Take-Home Assignment
#### *By Meshack Pangas*
This project focuses on developing a responsive sales agent dashboard to streamline school account management, invoicing, and collections. It also incorporates data visualization tools for tracking targets and sign-ups.

## Project Objective
Zeraki, a company dedicated to revolutionizing African education, requires an internal system to enhance sales agent operations. This dashboard aims to improve sales agent efficiency in managing school relationships.

## Setup/Installation Requirements
- Fork and Clone this repository; `https://github.com/spookeyy/ZERAKI-TASK.git`
- Navigate to the directory and `cd ZERAKI-TASK` folder in your terminal.
- use `code . ` command to open the folder in VScode

## Features:
### 1. Side Navigation
. Implemented a navigation bar for easy access to application functionalities divided in two modules.
. The sidebar should contain:
#### Dashboard module: 
    - Displas dynamic counters for Key metrics like Collections, Sign-ups, Total Revenue, and Bounced Cheques.
#### Schools module: 
    - Provides a list of schools with options to view detailed information, (invoices and collections)
### 2. Dashboard Overview:
#### Top Card Metrics: 
    - Showcase key performance indicators (KPIs) on the dashboard for at-a-glance insights:
        - Collections - Total number of collections made (dynamically updates).
        - Sign-ups - Total new school sign-ups with further breakdown by product (Zeraki Analytics, Zeraki Finance, Zeraki Timetable).
        - Total Revenue -  Overall revenue collected with details showing per-product revenue (Zeraki Analytics, Zeraki Finance, Zeraki Timetable).
        - Bounced Cheques - Number of bounced cheques.
#### Targets Visualization
        - Implementation of pie charts to visually represent progress towards signup targets for Zeraki products (Analytics, Finance, Timetable).
            . Clearly differentiate between set targets and achieved targets (actual signups).
            . Include interactive tooltips displaying exact numbers or percentages on hover.

#### Signups Overview
        - Use bar graphs to visualize signup distribution across school types (Primary, Secondary, IGCSE) for each Zeraki product.
            . Each product should have its own segmented bar graph with colored bars representing school types.
            . Implementing interactive elements like clicking a bar to access detailed statistics.
### 3. Upcoming Invoices
. Streamline payment management and collection with a list of upcoming invoices displayed on the dashboard, ordered by due date (earliest first).
    . Each entry should show school name, amount due, due date, and quick actions for payment collection.
    . Include a feature for direct payment collection from the list, potentially using modal or side-panel forms for entering collection details.
### 4. School Management:

. Facilitate school data organization, viewing, and manipulation, including invoices and collections.

#### Schools:

    . Display a list of all schools, allowing users to select a specific school for detailed information on associated invoices and collections.
    . School details include (but are not limited to): name, type (Primary, Secondary, IGCSE), product used, county, registration date, contact information, and school balance (invoices vs. collections).
#### Invoices:

    . Provides comprehensive invoice management per school with enhanced filtering (completed/pending) and CRUD capabilities (Create, Read, Update, Delete).
        . Automatic generation of unique invoice numbers.
        . Users can specify due dates, amounts, and associated items (Zeraki products).
        . Allow adding collections to invoices with options for marking partial or full payments.
        . Update invoice status based on collection results (e.g., marking incomplete for bounced collections).
#### Collections:

. Manage collections per school effectively, with functionalities to update invoice statuses based on collection outcomes.
    . List all collections for each school, including invoice number, collection number, date of collection, status (Valid, Bounced), and amount.
    . Allow users to directly update collection status from the list (valid or bounced). By default, collections should be marked valid.



#### Technical Requirements:

Framework: latest stable version of React.
Data Handling: Simulating real-time data updates with mock JSON data. Leveraging mock APIs for development without a backend server.


- Run this commands to get started:
  ```
  npm install
  npm run dev
  ```
  or
  ```
  yarn install
  yarn dev
  ```
  - And the application is running in the browser.
# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Live link
#### Tools used: 
- `Netlify` - deploy react frontend
<!-- - `Render` - deploy backend (mock server) -->
  
Deployed Frontend can be accessed here https://zeraki-sales-agent.netlify.app/



## Technologies used
    - React Js
    - Vite
    - React Router
    - Tailwind CSS
#### package managers
- ```npm``` conversant with ```yarn```
    
### License
*Licenced under the MIT Licence
Copyright (c) 2024 **Meshack Pangas
