import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://elastic.github.io/synthetics-demo/',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 240,
      locations: ['japan','singapore'],
      privateLocations: [],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'digitalgov',
      url: 'https://o11y-project-01-c352d9.kb.ap-southeast-1.aws.elastic.cloud/',
      space: 'default',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
