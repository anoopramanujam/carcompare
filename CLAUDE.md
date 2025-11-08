# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Car Compare is a React-based web application that helps users find the best electric cars through a comprehensive filtering and comparison system. The app uses a wizard-based interface with three filter steps: Specifications, Features, and Preferences.

## Common Commands

### Development
- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### Linting
- The project uses ESLint with Airbnb configuration
- ESLint is configured in package.json under "eslintConfig"
- Includes plugins for React, Jest, accessibility, and testing-library

## Architecture

### State Management
The application uses Redux Toolkit with multiple slices:
- `globalSlice.js` - Manages global app state (cars data, search term, wizard mode)
- `specSlice.js` - Handles specification filters
- `featureSlice.js` - Manages feature filters
- `prefSlice.js` - Controls preference filters

### Key Components Structure
- **Main Entry**: `src/index.js` configures the Redux store and loads car data
- **App Component**: Simple wrapper that renders the Main component
- **Home Component**: Main view controller that switches between wizard mode and results
- **Filters Component**: Multi-step wizard interface using Material-UI Stepper
- **Result Components**: Display filtered car results

### Data Architecture
- Car data is loaded from `public/carData.json` via axios
- API base configuration in `src/globals/Constants.js`
- Data includes electric vehicle specifications, features, and metadata

### Filter System
The app implements a three-step filtering wizard:
1. **Specifications**: Technical specs filtering
2. **Features**: Feature-based filtering
3. **Preferences**: User preference weighting

### UI Framework
- Material-UI (@mui/material) for components and theming
- Custom styled components using @emotion
- React Final Form for form handling
- React Router for navigation (though currently single-page)

## File Organization
- `src/components/` - React components organized by feature area
- `src/reducers/` - Redux slices for state management
- `src/api/` - API configuration and calls
- `src/globals/` - Constants and shared utilities
- `public/` - Static assets including car data JSON

## Data Flow
1. App initializes and loads car data via `loadCars()` thunk
2. User interacts with filter steps, updating respective Redux slices
3. Filter logic processes cars array based on current filter state
4. Results component displays filtered and sorted car list

## Development Notes
- Uses React 17 with Create React App 5.0
- Configured for production deployment on Cloudflare Pages
- No custom build configuration - relies on CRA defaults
- ESLint configuration includes accessibility and testing best practices