interface OpcUaConfig {
  endpointUrl: string;
  connectionOptions: {
    endpointMustExist: boolean;
    connectionStrategy: {
      initialDelay: number;
      maxRetry: number;
    };
  };
}

const opcUaConfig: OpcUaConfig = {
  endpointUrl: process.env.OPCUA_ENDPOINT || 'opc.tcp://localhost:4840',
  connectionOptions: {
    endpointMustExist: false,
    connectionStrategy: {
      initialDelay: 1000,
      maxRetry: 3
    }
  }
};

export default opcUaConfig;
