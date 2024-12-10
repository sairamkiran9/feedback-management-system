# Feedback Management System

A modern, feature-rich survey and feedback management platform built with Next.js, similar to Qualtrics. The system provides powerful tools for creating, managing, and analyzing surveys with an intuitive user interface.

## Features

### Authentication
- JWT-based authentication
- Secure login and signup flows
- Protected dashboard routes

### Survey Management
- Drag-and-drop survey builder
- Real-time survey preview
- Multiple question types:
  - Short text
  - Long text
  - Multiple choice
  - Single choice
  - Rating scale

### Analytics Dashboard
- Real-time response tracking
- Visual data representation using Recharts
- Key metrics overview:
  - Total responses
  - Average completion time
  - Completion rates
  - Active surveys
- Response distribution analysis
- Time-based completion trends
- Recent responses tracking

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Drag and Drop**: dnd-kit

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   │   ├── analytics/
│   │   └── surveys/
│   └── surveys/
├── components/
│   ├── analytics/
│   ├── survey-builder/
│   ├── survey/
│   └── ui/
└── lib/
```

## Coding Best Practices

### File Organization
- Each file has a single responsibility
- Components are broken down into smaller, reusable pieces
- Related functionality is grouped in dedicated directories
- Shared utilities are extracted into the `lib` directory

### Component Structure
- Components are small and focused
- Business logic is separated from UI components
- Reusable hooks are extracted to `hooks` directory
- Types and interfaces are defined in separate files

### Code Quality
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Jest and React Testing Library for testing
- Proper error handling and loading states
- Comprehensive comments for complex logic

### Performance
- Code splitting and lazy loading
- Optimized images and assets
- Memoization where appropriate
- Efficient state management
- Minimal re-renders

## Future AI Analytics Features

### 1. Response Analysis
- [ ] Sentiment analysis of text responses
- [ ] Keyword extraction and topic modeling
- [ ] Response clustering and pattern detection
- [ ] Anomaly detection in responses

### 2. Predictive Analytics
- [ ] Response rate predictions
- [ ] Completion time estimations
- [ ] Participant engagement forecasting
- [ ] Survey fatigue detection

### 3. Natural Language Processing
- [ ] Automated response categorization
- [ ] Key insights extraction
- [ ] Response summarization
- [ ] Language sentiment trends

### 4. Advanced Visualizations
- [ ] AI-generated insight cards
- [ ] Dynamic word clouds
- [ ] Correlation matrices
- [ ] Interactive network graphs

### 5. Smart Recommendations
- [ ] Question optimization suggestions
- [ ] Survey length recommendations
- [ ] Best time to send surveys
- [ ] Target audience suggestions

### 6. Automated Reporting
- [ ] AI-powered executive summaries
- [ ] Key findings highlights
- [ ] Trend identification
- [ ] Custom report generation

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.
