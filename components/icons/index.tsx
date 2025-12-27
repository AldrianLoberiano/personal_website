// Export all icon components
export { default as ReactIcon } from '../ReactIcon';
export * from './FrontendIcons';
export * from './BackendIcons';
export * from './DatabaseIcons';
export * from './CloudIcons';
export * from './TechIcons';
export * from './WebIcons';
export * from './AdditionalIcons';
export * from './CollaborationIcons';
export * from './IoTIcons';
export * from './DevToolsIcons';

// Simple placeholder icons for skills that don't have custom SVGs yet
export function PlaceholderIcon({ emoji }: { emoji: string }) {
  return <span style={{ fontSize: '24px' }}>{emoji}</span>;
}
