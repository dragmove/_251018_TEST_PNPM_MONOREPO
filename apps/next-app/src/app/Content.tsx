'use client';

import Logger from '@pnpmworkspace/logger';
import { useEffect } from 'react';

export default function Content() {
  useEffect(() => {
    Logger('[next-app] App component mounted');
  }, [])

  return (
    <div>Use `@pnpmworkspace/logger` package's `Logger` function</div>
  );
}
