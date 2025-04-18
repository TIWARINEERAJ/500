# Comprehensive Prompt for Developing an AI Agent to Automate Turbine Shutdown SOP in a 500 MW Coal Power Plant

## 1. Introduction and Context

Develop an AI-enabled agent system that automates the Standard Operating Procedure (SOP) for turbine shutdown in a 500 MW coal-fired thermal power plant. This system will function similarly to an AI-enabled Automatic Turbine Run-up System (ATRS), but focused on the shutdown sequence. The agent should guide operators through the 93-step shutdown procedure while continuously validating each step against real-time sensor data to ensure safety, efficiency, and compliance.

Thermal power plants represent critical infrastructure with complex operational requirements. The turbine shutdown process is particularly sensitive, requiring precise sequencing and parameter monitoring to prevent equipment damage, ensure personnel safety, and maintain plant integrity. Currently, this process relies heavily on manual execution and verification, introducing potential for human error during a critical operation.

By automating this procedure, the system will:
- Reduce the risk of operational errors during shutdown
- Ensure consistent application of best practices
- Provide real-time validation against sensor data
- Create comprehensive audit trails for regulatory compliance
- Enable knowledge transfer and standardization across operations
- Reduce shutdown time while maintaining or improving safety margins

The system should function as a digital assistant that guides operators through each step, validates conditions before proceeding, and maintains a complete record of the shutdown process.

## 2. Project Objectives

### Primary Goals
1. Develop an AI agent that automates and validates the complete 93-step turbine shutdown SOP for a 500 MW coal power plant
2. Create a system that integrates with plant sensors to validate each step in real-time
3. Implement a user-friendly interface that guides operators through the shutdown process
4. Establish a secure, reliable platform that meets power industry standards
5. Provide comprehensive logging and reporting for compliance and analysis

### Key Performance Indicators
1. 100% coverage of all 93 SOP steps
2. Real-time validation of at least 50 critical sensor parameters
3. Step completion time reduction of 15-20% compared to manual process
4. Zero false positives in safety-critical validations
5. System availability of 99.9% or higher
6. Response time under 2 seconds for all user interactions
7. Complete audit trail generation for regulatory compliance

### Compliance and Safety Requirements
1. Adherence to IEEE 1686 for substation intelligent electronic devices
2. Compliance with IEC 61508 for functional safety
3. Alignment with NERC CIP standards for critical infrastructure protection
4. Implementation of IEC 62351 for data and communications security
5. Conformance with plant-specific safety protocols and emergency procedures

### Integration Requirements
1. Seamless connection with existing Distributed Control System (DCS)
2. Integration with plant historian for data retrieval and storage
3. Compatibility with existing sensor infrastructure
4. Support for standard industrial protocols (OPC UA, Modbus, etc.)
5. Integration with plant alarm management system

## 3. Technical Requirements

### Express Backend Architecture
1. **Framework**: Node.js with Express.js for RESTful API development
2. **Architecture**: Implement a microservices architecture with the following services:
   - Authentication service
   - SOP management service
   - Sensor data integration service
   - Validation engine service
   - Reporting and audit service
3. **API Design**:
   - RESTful endpoints for all services
   - WebSocket implementation for real-time updates
   - Comprehensive API documentation using Swagger/OpenAPI
4. **Performance Requirements**:
   - Response time < 200ms for API calls
   - Support for at least 100 concurrent users
   - Handling of high-frequency sensor data updates (up to 10 updates/second)

### React Frontend Specifications
1. **Framework**: React.js with TypeScript
2. **State Management**: Redux for global state, Context API for component-level state
3. **UI Components**:
   - Material-UI or Ant Design for consistent component library
   - Custom components for specialized visualizations
   - Responsive design for control room displays and tablets
4. **Key Features**:
   - Interactive SOP workflow visualization
   - Real-time sensor data displays
   - Parameter trend visualization
   - Step validation indicators
   - Exception handling interface
   - User authentication and role management
   - Dark mode for control room environments

### PostgreSQL Database Design
1. **Schema Design**:
   - Users table (authentication, roles, permissions)
   - SOP_Procedures table (step definitions, requirements, validations)
   - Sensor_Definitions table (sensor metadata, expected ranges)
   - Shutdown_Sessions table (tracking active and historical shutdowns)
   - Validation_Results table (step validations with timestamps)
   - Audit_Logs table (all system actions and events)
2. **Performance Considerations**:
   - Appropriate indexing for frequent queries
   - Partitioning for historical data
   - Connection pooling for optimal resource usage
3. **Data Retention**:
   - Configurable retention policies for different data types
   - Archiving strategy for historical shutdown data
   - Compliance with regulatory data retention requirements

### GitHub Repository Structure
1. **Main Repositories**:
   - `turbine-shutdown-backend`: Express backend services
   - `turbine-shutdown-frontend`: React frontend application
   - `turbine-shutdown-infrastructure`: Infrastructure as Code (IaC)
   - `turbine-shutdown-docs`: Documentation and specifications
2. **Branch Strategy**:
   - `main`: Production-ready code
   - `develop`: Integration branch for feature development
   - `feature/*`: Individual feature branches
   - `hotfix/*`: Emergency fixes for production
3. **CI/CD Integration**:
   - GitHub Actions workflows for automated testing
   - Integration with Google Cloud Build
   - Automated deployment to staging environments
   - Manual approval for production deployments

### Google Cloud Run Deployment Specifications
1. **Container Configuration**:
   - Dockerfiles for all services
   - Container optimization for minimal footprint
   - Health check endpoints for all services
2. **Deployment Strategy**:
   - Blue/green deployment for zero-downtime updates
   - Automatic scaling based on load
   - Regional deployment for high availability
   - Memory and CPU allocation based on service requirements
3. **Monitoring and Logging**:
   - Integration with Google Cloud Monitoring
   - Structured logging to Google Cloud Logging
   - Custom dashboards for system health visualization
   - Alerting for critical system events

## 4. SOP Implementation

### Detailed Breakdown of the 93-Step Procedure
The system must implement all 93 steps of the turbine shutdown SOP as provided in the specification. Each step should be modeled with the following attributes:

1. **Step Metadata**:
   - Step number and sequence
   - Description and detailed instructions
   - Expected duration
   - Criticality level (safety-critical, operational, informational)
   - Required operator role/permission

2. **Validation Requirements**:
   - Preconditions that must be met before step execution
   - Sensor parameters to validate during execution
   - Expected parameter ranges or states
   - Validation timeout periods

3. **User Interaction Model**:
   - Required operator inputs
   - Confirmation requirements
   - Override capabilities (with appropriate authorization)
   - Documentation requirements

4. **Example Implementation (Step 12)**:
   ```json
   {
     "stepNumber": 12,
     "description": "Maintain MS & HRH temp, Throttle pr 150KSC",
     "detailedInstructions": "Monitor and maintain Main Steam and Hot Reheat temperatures within operational range while ensuring throttle pressure is stabilized at 150 KSC",
     "expectedDuration": 300,
     "criticalityLevel": "operational",
     "requiredRole": "operator",
     "validations": [
       {
         "parameter": "MS_TEMP",
         "expectedRange": [535, 545],
         "units": "°C",
         "validationPeriod": 60
       },
       {
         "parameter": "HRH_TEMP",
         "expectedRange": [535, 545],
         "units": "°C",
         "validationPeriod": 60
       },
       {
         "parameter": "THROTTLE_PRESSURE",
         "expectedRange": [148, 152],
         "units": "KSC",
         "validationPeriod": 60
       }
     ],
     "userInteractions": [
       {
         "type": "confirmation",
         "message": "Confirm MS and HRH temperatures are stable and throttle pressure is at 150 KSC",
         "requiresSignoff": true
       }
     ]
   }
   ```

### Decision Points and Conditional Logic
The system must implement conditional logic for steps that have multiple execution paths:

1. **Conditional Branching**:
   - Implement decision trees for steps with multiple outcomes
   - Support for operator decision input when automation cannot determine the path
   - Clear visualization of decision points in the UI

2. **Example Conditional Logic (Steps 89-90)**:
   ```javascript
   if (APH_HOT_WASHING_REQUIRED) {
     // Execute Step 89
     executeStep({
       stepNumber: 89,
       description: "Stop ID & FD fan at 205C & carry out APH hot washing...",
       // Additional step details
     });
   } else {
     // Execute Step 90
     executeStep({
       stepNumber: 90,
       description: "Otherwise, Stop ID & FD fan & follow Boiler cooling procedure",
       // Additional step details
     });
   }
   ```

3. **Exception Handling**:
   - Define alternative paths for common exceptions
   - Implement recovery procedures for each exception type
   - Provide clear guidance to operators during exception handling

### Progress Tracking and Validation
1. **Progress Visualization**:
   - Real-time progress indicator showing completed, current, and pending steps
   - Time-based progress tracking against expected durations
   - Critical path highlighting for time-sensitive sequences

2. **Validation Status**:
   - Clear indication of validation status for each step
   - Historical validation results for completed steps
   - Trend visualization for key parameters during validation

3. **Checkpoint Implementation**:
   - Define critical checkpoints within the 93-step procedure
   - Require additional verification at checkpoints
   - Support for supervisor approval at major transition points

### Exception Handling
1. **Sensor Failure Handling**:
   - Procedures for continuing operation with degraded sensor data
   - Alternative validation methods when primary sensors fail
   - Clear indication of sensor health status

2. **Parameter Deviation Handling**:
   - Graduated response based on deviation severity
   - Automatic corrective action recommendations
   - Escalation procedures for critical deviations

3. **Emergency Procedures**:
   - Integration with plant emergency response systems
   - One-click access to emergency procedures
   - Automatic logging of emergency events

## 5. Sensor Data Integration

### Required Sensor Types and Parameters
Based on the 93-step SOP, the system must integrate with sensors monitoring the following parameters:

1. **Temperature Parameters**:
   - Main Steam (MS) temperature
   - Hot Reheat (HRH) temperature
   - Seal Steam (SS) temperature (>270°C)
   - Auxiliary steam header temperature
   - Cold gas temperature
   - Primary water temperature (differential >3.5°C with cold gas)
   - LPT/HPT exhaust temperature
   - HPC/IPC top/Bot, HPS/IPS temperature
   - Lubricating oil temperature (>45°C)
   - APH inlet temperature (critical at 205°C)
   - CC pump suction manifold temperature (critical at 95°C)

2. **Pressure Parameters**:
   - Throttle pressure (various setpoints: 150KSC, 140KSC, etc.)
   - Deaerator (D/A) pegging steam pressure (3.5 ksc)
   - AOP1 pressure (>6ksc)
   - Lubricating oil pressure (>2.6 KSC)
   - MS & CRH pressure
   - Expansion tank N2 pressure (0.2ksc)
   - Generator H2 pressure (3.4ksc)
   - SH header drain pressure (8KSC)
   - Startup vent & Air vents pressure (2-3KSC)

3. **Speed Parameters**:
   - Turbine speed (various thresholds: 2850 RPM, 2000 RPM, etc.)

4. **Load Parameters**:
   - Unit load (various setpoints: 425 MW, 350 MW, etc.)

5. **Oxygen & Emissions Parameters**:
   - O2 percentage (>4.5%)
   - CO level (<40)

6. **Valve Positions** for all critical valves mentioned in the SOP

7. **Other Parameters**:
   - Vacuum level
   - Shaft & Pedestal Vibrations
   - Expansion
   - Bearing temperature
   - Hot well level

### Data Acquisition Methods
1. **Integration Protocols**:
   - OPC UA/DA for DCS integration
   - Modbus TCP/RTU for PLC integration
   - MQTT for IoT sensor integration
   - REST APIs for modern digital systems
   - Database connectors for historian systems (e.g., PI, OSIsoft)

2. **Sample Implementation for OPC UA Integration**:
   ```javascript
   // Example OPC UA client implementation
   const { OPCUAClient } = require("node-opcua");
   
   async function fetchSensorData(nodeId) {
     const client = OPCUAClient.create({
       endpoint_must_exist: false,
       connectionStrategy: {
         initialDelay: 1000,
         maxRetry: 3
       }
     });
     
     try {
       await client.connect(OPCUA_SERVER_URL);
       const session = await client.createSession();
       const dataValue = await session.read({
         nodeId: nodeId,
         attributeId: AttributeIds.Value
       });
       await session.close();
       await client.disconnect();
       return dataValue.value.value;
     } catch (error) {
       console.error(`Error fetching sensor data: ${error.message}`);
       throw error;
     }
   }
   ```

3. **Polling and Subscription Strategies**:
   - Implement different polling rates based on parameter criticality
   - Use subscription-based updates for rapidly changing parameters
   - Implement deadband filtering to reduce unnecessary updates

4. **Fallback Mechanisms**:
   - Define primary and secondary data sources for critical parameters
   - Implement store-and-forward for intermittent connectivity
   - Support manual data entry as last resort with appropriate validation

### Validation Algorithms
1. **Range Validation**:
   - Simple min/max range checking for basic parameters
   - Statistical process control for parameters with normal distributions
   - Rate-of-change validation for dynamic parameters

2. **Cross-Parameter Validation**:
   - Correlation checking between related parameters
   - Physical model validation for thermodynamic relationships
   - Mass and energy balance validation where applicable

3. **Temporal Validation**:
   - Stability checking for parameters that should be steady
   - Trend analysis for parameters with expected trajectories
   - Historical comparison with previous shutdown events

4. **Example Validation Implementation**:
   ```javascript
   function validateParameter(paramId, value, validationRules) {
     // Basic range check
     if (value < validationRules.min || value > validationRules.max) {
       return {
         valid: false,
         reason: `Value ${value} outside acceptable range [${validationRules.min}, ${validationRules.max}]`
       };
     }
     
     // Rate of change check if applicable
     if (validationRules.maxRateOfChange && previousValues[paramId]) {
       const timeElapsed = Date.now() - previousTimestamps[paramId];
       const rateOfChange = Math.abs(value - previousValues[paramId]) / (timeElapsed / 1000);
       
       if (rateOfChange > validationRules.maxRateOfChange) {
         return {
           valid: false,
           reason: `Rate of change ${rateOfChange} exceeds maximum ${validationRules.maxRateOfChange}`
         };
       }
     }
     
     // Update historical values
     previousValues[paramId] = value;
     previousTimestamps[paramId] = Date.now();
     
     return { valid: true };
   }
   ```

### Real-time Monitoring Requirements
1. **Update Frequency**:
   - Critical parameters: 1-2 second updates
   - Standard parameters: 5-10 second updates
   - Slow-changing parameters: 30-60 second updates

2. **Alerting Thresholds**:
   - Warning thresholds: 80% of critical limits
   - Alarm thresholds: 90% of critical limits
   - Emergency thresholds: 95% of critical limits

3. **Visualization Requirements**:
   - Color-coded status indicators
   - Trend lines with acceptable ranges
   - Predictive trend indicators (where will the parameter be in 5 minutes)
   - Historical comparison overlays

4. **Data Buffering**:
   - Local caching of recent sensor data
   - Replay capability for recent history
   - Offline operation capability during network interruptions

## 6. User Interface Design

### Dashboard Requirements
1. **Main Dashboard Components**:
   - SOP progress tracker
   - Critical parameter display
   - Active alarms and warnings
   - System status indicators
   - Navigation to detailed views

2. **SOP Execution View**:
   - Current step details with instructions
   - Next steps preview
   - Completed steps summary
   - Expected vs. actual timeline
   - Step validation status

3. **Parameter Monitoring View**:
   - Categorized parameter displays (temperatures, pressures, etc.)
   - Custom parameter groupings by system
   - Trend visualization with configurable time ranges
   - Threshold indicators and alerts

4. **Reporting Dashboard**:
   - Shutdown summary statistics
   - Compliance status
   - Exception reports
   - Performance metrics
   - Historical comparison

### Visualization Components
1. **SOP Workflow Visualization**:
   - Interactive flowchart of all 93 steps
   - Current position indicator
   - Branching path visualization
   - Critical path highlighting

2. **Parameter Visualization**:
   - Real-time gauges for critical values
   - Trend charts with configurable time ranges
   - Multi-parameter correlation charts
   - Heat maps for system-wide status

3. **Alarm Visualization**:
   - Prioritized alarm list
   - Alarm history timeline
   - Alarm response tracking
   - Escalation status indicators

4. **Example React Component for Step Visualization**:
   ```jsx
   const StepVisualizer = ({ currentStep, allSteps, validationStatus }) => {
     return (
       <div className="step-visualizer">
         <div className="step-progress">
           <ProgressBar 
             current={currentStep.stepNumber} 
             total={allSteps.length} 
           />
         </div>
         
         <div className="current-step-details">
           <h3>Step {currentStep.stepNumber}: {currentStep.description}</h3>
           <p>{currentStep.detailedInstructions}</p>
           
           <div className="validation-status">
             {currentStep.validations.map(validation => (
               <ValidationIndicator
                 key={validation.parameter}
                 parameter={validation.parameter}
                 status={validationStatus[validation.parameter]}
                 expectedRange={validation.expectedRange}
                 units={validation.units}
               />
             ))}
           </div>
           
           <div className="user-interactions">
             {currentStep.userInteractions.map(interaction => (
               <UserInteractionControl
                 key={interaction.type}
                 type={interaction.type}
                 message={interaction.message}
                 requiresSignoff={interaction.requiresSignoff}
               />
             ))}
           </div>
         </div>
         
         <div className="next-steps-preview">
           <h4>Coming Up</h4>
           <NextStepsList steps={allSteps.slice(
             currentStep.stepNumber, 
             currentStep.stepNumber + 3
           )} />
         </div>
       </div>
     );
   };
   ```

### User Roles and Permissions
1. **Role Definitions**:
   - Operator: Executes SOP steps, views sensor data
   - Supervisor: Approves exceptions, manages operators
   - Engineer: Configures validation rules, analyzes performance
   - Administrator: Manages users, configures system settings
   - Auditor: Views logs and reports, no operational control

2. **Permission Matrix**:
   - Step execution permissions by role
   - Override authorization levels
   - Report access restrictions
   - Configuration change authority
   - Historical data access limitations

3. **Authentication Requirements**:
   - Multi-factor authentication for critical roles
   - Role-based access control
   - Session timeout policies
   - Login attempt limitations
   - Audit logging of all authentication events

### Mobile Responsiveness
1. **Device Support**:
   - Control room displays (large screens)
   - Desktop workstations
   - Tablets for mobile operators
   - Emergency response smartphones

2. **Responsive Design Requirements**:
   - Fluid layouts that adapt to different screen sizes
   - Touch-friendly controls for tablet use
   - Simplified views for smaller screens
   - Offline capability for intermittent connectivity

3. **Mobile-Specific Features**:
   - Push notifications for critical alerts
   - Barcode/QR scanning for equipment identification
   - Camera integration for documentation
   - GPS integration for location tracking

## 7. Security Considerations

### Authentication and Authorization
1. **Authentication Methods**:
   - Username/password with complexity requirements
   - Multi-factor authentication for critical roles
   - Integration with plant identity management systems
   - Biometric authentication where appropriate

2. **Authorization Framework**:
   - Role-based access control (RBAC)
   - Attribute-based access control (ABAC) for complex permissions
   - Just-in-time access provisioning for emergency scenarios
   - Segregation of duties enforcement

3. **Session Management**:
   - Secure session handling with encryption
   - Automatic timeout after inactivity
   - Concurrent session limitations
   - Session hijacking prevention

### Data Encryption
1. **Data at Rest**:
   - Database encryption for sensitive data
   - File system encryption for configuration files
   - Encryption key management system
   - Regular key rotation

2. **Data in Transit**:
   - TLS 1.3 for all HTTP communications
   - VPN for remote access
   - Secure industrial protocols where available
   - Certificate management and validation

3. **End-to-End Encryption**:
   - Encrypted communication channels for critical commands
   - Secure key exchange mechanisms
   - Message signing for command authenticity
   - Perfect forward secrecy for sensitive communications

### Audit Logging
1. **Logging Requirements**:
   - All user authentication events
   - All SOP step executions and validations
   - All parameter validation results
   - All system configuration changes
   - All security-related events

2. **Log Protection**:
   - Tamper-evident logging
   - Log forwarding to secure storage
   - Log retention policies aligned with compliance requirements
   - Log access restrictions

3. **Log Analysis**:
   - Real-time security monitoring
   - Anomaly detection in user behavior
   - Correlation of security events
   - Automated alerting for suspicious activities

### Compliance with Industry Standards
1. **Regulatory Compliance**:
   - NERC CIP for critical infrastructure
   - IEC 62351 for power systems management
   - ISO 27001 for information security
   - Local regulatory requirements

2. **Security Testing**:
   - Regular vulnerability assessments
   - Penetration testing requirements
   - Security code reviews
   - Dependency vulnerability scanning

3. **Incident Response**:
   - Security incident response procedures
   - Integration with plant emergency procedures
   - Communication protocols during security events
   - Recovery and forensics capabilities

## 8. Testing and Validation

### Unit Testing Requirements
1. **Backend Testing**:
   - 100% test coverage for validation algorithms
   - Mock testing for sensor data integration
   - API endpoint testing
   - Database operation testing

2. **Frontend Testing**:
   - Component testing for all UI elements
   - State management testing
   - User interaction testing
   - Responsive design testing

3. **Example Test Case for Validation Logic**:
   ```javascript
   describe('Parameter Validation', () => {
     test('should validate parameters within range', () => {
       const rules = { min: 100, max: 200 };
       const result = validateParameter('TEST_PARAM', 150, rules);
       expect(result.valid).toBe(true);
     });
     
     test('should reject parameters outside range', () => {
       const rules = { min: 100, max: 200 };
       const result = validateParameter('TEST_PARAM', 250, rules);
       expect(result.valid).toBe(false);
     });
     
     test('should validate rate of change', () => {
       const rules = { min: 100, max: 200, maxRateOfChange: 10 };
       
       // Set up previous value
       previousValues['TEST_PARAM'] = 150;
       previousTimestamps['TEST_PARAM'] = Date.now() - 1000; // 1 second ago
       
       // Test acceptable rate of change
       const result1 = validateParameter('TEST_PARAM', 155, rules);
       expect(result1.valid).toBe(true);
       
       // Reset for next test
       previousValues['TEST_PARAM'] = 150;
       previousTimestamps['TEST_PARAM'] = Date.now() - 1000;
       
       // Test excessive rate of change
       const result2 = validateParameter('TEST_PARAM', 170, rules);
       expect(result2.valid).toBe(false);
     });
   });
   ```

### Integration Testing Approach
1. **System Integration Tests**:
   - End-to-end workflow testing
   - Cross-service communication testing
   - Database integration testing
   - External system integration testing

2. **Performance Integration Tests**:
   - Load testing under expected conditions
   - Stress testing under extreme conditions
   - Endurance testing for long-running operations
   - Recovery testing after system failures

3. **Security Integration Tests**:
   - Authentication and authorization testing
   - Encryption verification
   - Penetration testing
   - Compliance verification testing

### Simulation Environment
1. **Sensor Data Simulation**:
   - Realistic sensor data generation
   - Scenario-based simulation profiles
   - Fault injection capabilities
   - Time acceleration for long procedures

2. **Operator Interaction Simulation**:
   - Automated operator input simulation
   - Response time variation modeling
   - Error injection for exception testing
   - Multiple concurrent operator simulation

3. **Plant System Simulation**:
   - DCS response simulation
   - Interlock and protection system simulation
   - Physical system response modeling
   - Emergency scenario simulation

### Performance Benchmarks
1. **Response Time Benchmarks**:
   - UI interaction response: < 200ms
   - Sensor data update latency: < 1s
   - Validation processing time: < 500ms
   - Report generation time: < 5s

2. **Throughput Benchmarks**:
   - Sensor updates per second: > 1000
   - Concurrent user capacity: > 50
   - Database transactions per second: > 500
   - API requests per second: > 200

3. **Reliability Benchmarks**:
   - System uptime: > 99.9%
   - Data accuracy: > 99.99%
   - Successful validation rate: > 99.9%
   - Error recovery success rate: > 99%

## 9. Deployment and DevOps

### CI/CD Pipeline
1. **Continuous Integration**:
   - Automated build on every commit
   - Unit test execution
   - Static code analysis
   - Dependency vulnerability scanning

2. **Continuous Delivery**:
   - Automated deployment to development environment
   - Integration test execution
   - Performance test execution
   - Security scan execution

3. **Deployment Approval Process**:
   - Automated staging environment deployment
   - QA verification and sign-off
   - Security review and approval
   - Production deployment authorization

4. **Example GitHub Actions Workflow**:
   ```yaml
   name: CI/CD Pipeline

   on:
     push:
       branches: [ main, develop ]
     pull_request:
       branches: [ main, develop ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - name: Set up Node.js
         uses: actions/setup-node@v2
         with:
           node-version: '16'
       - name: Install dependencies
         run: npm ci
       - name: Run linting
         run: npm run lint
       - name: Run unit tests
         run: npm test
       - name: Build application
         run: npm run build
       - name: Run security scan
         run: npm run security-scan
       - name: Upload build artifacts
         uses: actions/upload-artifact@v2
         with:
           name: build-artifacts
           path: build/

     deploy-dev:
       needs: build
       if: github.ref == 'refs/heads/develop'
       runs-on: ubuntu-latest
       steps:
       - name: Download build artifacts
         uses: actions/download-artifact@v2
         with:
           name: build-artifacts
           path: build/
       - name: Set up Google Cloud SDK
         uses: google-github-actions/setup-gcloud@v0
         with:
           project_id: ${{ secrets.GCP_PROJECT_ID }}
           service_account_key: ${{ secrets.GCP_SA_KEY }}
       - name: Deploy to Dev
         run: |
           gcloud builds submit --config=cloudbuild-dev.yaml
   ```

### Monitoring and Alerting
1. **System Monitoring**:
   - Infrastructure monitoring (CPU, memory, disk, network)
   - Application performance monitoring
   - Database performance monitoring
   - API endpoint monitoring

2. **Business Process Monitoring**:
   - SOP execution monitoring
   - Step completion time tracking
   - Validation success rate monitoring
   - Exception frequency monitoring

3. **Alerting Configuration**:
   - Tiered alert severity levels
   - Alert routing based on type and severity
   - Alert aggregation to prevent flooding
   - Alert acknowledgment and resolution tracking

4. **Visualization and Dashboards**:
   - System health dashboards
   - Performance trend dashboards
   - Security monitoring dashboards
   - Business process dashboards

### Backup and Disaster Recovery
1. **Backup Strategy**:
   - Database backup schedule and retention
   - Configuration backup procedures
   - Code and infrastructure as code backup
   - Secure backup storage with encryption

2. **Disaster Recovery Plan**:
   - Recovery Time Objective (RTO): < 4 hours
   - Recovery Point Objective (RPO): < 15 minutes
   - Failover procedures and testing
   - Regular disaster recovery drills

3. **High Availability Configuration**:
   - Multi-zone deployment
   - Database replication
   - Load balancing
   - Automatic failover mechanisms

### Scaling Considerations
1. **Horizontal Scaling**:
   - Stateless service design for easy replication
   - Load balancer configuration
   - Session management across instances
   - Database connection pooling

2. **Vertical Scaling**:
   - Resource allocation guidelines
   - Performance monitoring thresholds
   - Upgrade procedures
   - Capacity planning methodology

3. **Data Scaling**:
   - Database sharding strategy
   - Time-series data optimization
   - Archiving and purging policies
   - Read replica implementation

## 10. Documentation Requirements

### Code Documentation
1. **Inline Documentation**:
   - JSDoc for JavaScript/TypeScript functions
   - Clear commenting for complex algorithms
   - Architecture decision records
   - Performance consideration notes

2. **API Documentation**:
   - OpenAPI/Swagger specification
   - Endpoint descriptions and examples
   - Error response documentation
   - Rate limiting and authentication requirements

3. **Database Documentation**:
   - Schema diagrams
   - Relationship documentation
   - Index strategy explanation
   - Query optimization guidelines

### User Manuals
1. **Operator Manual**:
   - System overview and purpose
   - Login and navigation instructions
   - SOP execution procedures
   - Exception handling guidelines
   - Troubleshooting procedures

2. **Supervisor Manual**:
   - Team management features
   - Override authorization procedures
   - Performance monitoring guidelines
   - Compliance reporting instructions

3. **Administrator Manual**:
   - System configuration guide
   - User management procedures
   - Backup and recovery instructions
   - Security policy implementation
   - System maintenance procedures

### API Documentation
1. **Internal API Documentation**:
   - Service-to-service communication
   - Authentication mechanisms
   - Rate limiting policies
   - Error handling standards

2. **External API Documentation**:
   - Integration points for external systems
   - Authentication requirements
   - Data format specifications
   - Example requests and responses

3. **Webhook Documentation**:
   - Event types and payload formats
   - Subscription management
   - Delivery guarantees and retry policies
   - Security considerations

### Maintenance Procedures
1. **Routine Maintenance**:
   - Database optimization schedule
   - Log rotation and archiving
   - Certificate renewal procedures
   - Performance tuning guidelines

2. **Update Procedures**:
   - Version update process
   - Database migration procedures
   - Rollback procedures
   - Testing requirements for updates

3. **Troubleshooting Guides**:
   - Common issue resolution steps
   - Log analysis procedures
   - Performance bottleneck identification
   - Error code reference

## 11. Future Enhancements

### AI/ML Integration Possibilities
1. **Predictive Analytics**:
   - Anomaly detection in sensor data
   - Predictive maintenance based on shutdown patterns
   - Optimal shutdown path recommendation
   - Performance optimization suggestions

2. **Natural Language Processing**:
   - Voice-controlled operation for hands-free scenarios
   - Automatic documentation generation from operator actions
   - Procedure optimization from historical execution notes
   - Intelligent search across shutdown records

3. **Computer Vision Integration**:
   - Equipment status verification via cameras
   - Gauge reading automation
   - Personnel safety monitoring
   - Physical system state verification

### Predictive Maintenance
1. **Equipment Health Monitoring**:
   - Vibration analysis during shutdown
   - Temperature pattern analysis
   - Valve operation time trending
   - Bearing condition assessment

2. **Failure Prediction Models**:
   - Early warning system for potential failures
   - Remaining useful life estimation
   - Maintenance scheduling optimization
   - Spare parts inventory optimization

3. **Shutdown Impact Analysis**:
   - Equipment stress assessment during shutdown
   - Thermal cycle impact calculation
   - Lifetime consumption estimation
   - Maintenance recommendation generation

### Integration with Other Plant Systems
1. **Maintenance Management System**:
   - Automatic work order generation
   - Maintenance history correlation
   - Resource allocation optimization
   - Maintenance procedure recommendation

2. **Asset Management System**:
   - Equipment performance history
   - Lifecycle cost tracking
   - Replacement planning
   - Warranty and service contract management

3. **Plant Simulation System**:
   - Digital twin integration
   - What-if scenario analysis
   - Training simulation
   - Procedure optimization testing

### Performance Optimization Opportunities
1. **Shutdown Time Optimization**:
   - Critical path analysis
   - Parallel activity identification
   - Bottleneck identification and elimination
   - Procedure sequence optimization

2. **Resource Utilization Optimization**:
   - Staff allocation optimization
   - Tool and equipment usage planning
   - Utility consumption minimization
   - Waste reduction strategies

3. **Knowledge Management**:
   - Best practice capture and dissemination
   - Lessons learned repository
   - Expert knowledge preservation
   - Continuous improvement framework

## Implementation Guidelines

When implementing this AI agent for automating the turbine shutdown SOP, follow these guidelines to ensure a successful project:

1. **Phased Implementation Approach**:
   - Phase 1: Basic SOP digitization and UI
   - Phase 2: Sensor integration and validation
   - Phase 3: Advanced features and optimizations

2. **Stakeholder Engagement**:
   - Involve operators in UI design
   - Consult plant engineers for validation rules
   - Engage management for compliance requirements
   - Include IT security for security requirements

3. **Testing Strategy**:
   - Develop a comprehensive test plan
   - Conduct simulation testing before live testing
   - Perform parallel operation with manual procedures
   - Gradually increase automation level

4. **Training Program**:
   - Develop role-specific training materials
   - Conduct hands-on training sessions
   - Provide reference documentation
   - Establish a support system for questions

5. **Evaluation Metrics**:
   - Define clear success criteria
   - Establish baseline measurements
   - Implement continuous monitoring
   - Conduct regular reviews and adjustments

By following this comprehensive prompt, developers will be able to create an AI agent that successfully automates the turbine shutdown SOP for a 500 MW coal power plant, integrating with sensor data for validation and providing a robust, secure, and user-friendly system that improves safety, efficiency, and compliance.

## Annexure: Complete 93-Step Turbine Shutdown SOP

### 500 MW Coal Power Plant Turbine Shutdown Standard Operating Procedure

| Step | Procedure |
|------|-----------|
| 1 | Do water wall soot blowing before reducing load. |
| 2 | Ensure closing of boiler stop valve (L&R) integral bypass valve & body heating manual valve. |
| 3 | Ensure opening of all drain lines manual isolating valve to IBD tank. |
| 4 | Ensure opening of all Extraction line, MS,HRH, CRH & drains manual isolating valve. |
| 5 | DC EOPs, DC SOP trial taken & are on auto. |
| 6 | Ensure healthiness of all AC AOPs, JOPs. |
| 7 | Ensure opening of seal steam supply steam drain MAW 11 & SS header drain MAL 81. |
| 8 | Ensure opening of aux steam HT/LT headers drains.(steam traps are in service) |
| 9 | Isolate Auxiliary steam from CRH & MS line. |
| 10 | Ensure closing of seal steam motorized valve. |
| 11 | Start reducing load as per DC/SG up to 425 MW. |
| 12 | Maintain MS & HRH temp, Throttle pr 150KSC. |
| 13 | Close auxiliary steam from the unit & charge it from other running unit. |
| 14 | Take out top most mill & reduce load, Slowly to 350 MW. Throttle pr 140KSC. |
| 15 | Take out Machine from CMC. |
| 16 | Start reducing throttle pressure & maintain O2> 4.5%. (CO< 40) |
| 17 | Maintain MS, HRH temp. by SH/RH spray & BT. |
| 18 | Maintain aux steam header temp by ensuring opening of drains & HT/LT header temp from other unit. |
| 19 | Maintain seal steam temperature >270 deg centigrade. |
| 20 | Ensure closing of D/A overflow valve to condenser. |
| 21 | Ensure D/A pegging steam on auto and set at pr. 3.5 ksc. |
| 22 | Take out HPH 6A/6B one by one. |
| 23 | Take oil support corresponding to running mill. |
| 24 | Take out Bottom most mill, reduce load to 250 MW, pr. 120 ksc. |
| 25 | Take out HPH 5A/5B one by one. |
| 26 | Ensure extraction line of HPH (mal & mot) drain valves get open on auto or open it. |
| 27 | Start MD BFPC, unload one TD BFP & put on barring |
| 28 | Start reducing load in top most mill, load 150 MW. Pr. 100 KSC. |
| 29 | Do UT change over & isolate UT breakers. |
| 30 | Stop another TD BFP & put on barring. |
| 31 | Put low range C/V in service & Close high range C/V. |
| 32 | Stop top mill, keep oil support in running mills, Unload bottom most mill & stop it.(two middle mills are I/S) |
| 33 | load 100 MW. HP/LP bypass are I/S. Pr 70KSC. |
| 34 | Reduce pressure to 60 ksc slowly. |
| 35 | Ensure cold gas and primary water temp are maintaining on auto. (Diff>3.50C) |
| 36 | Ensure SGC oil on and at step No. 11. |
| 37 | Ensure SLC of exhaust hood spray is on. |
| 38 | Ensure AC AOP, JOP, DC EOP & DC JOP healthiness & SLC oil is on. |
| 39 | SLC drain is on auto. |
| 40 | Trip the boiler. Note down time. |
| 41 | Ensure HFO/LDO Trip valve & nozzle valve closes & short R/C opens on auto. |
| 42 | PA fan A&B, Mills will trip through interlock or trip it. |
| 43 | Turbine will trip through MFT. |
| 44 | HPT & IPT stop valve, CV & CRH NRV closed |
| 45 | Generator breaker will open with time delay of 10 sec. |
| 46 | Field breaker will open & Excitation voltage becomes zero. |
| 47 | Turbine speed starts reducing |
| 48 | Maintain SS pr & temp above 270°C & vacuum. |
| 49 | Ensure AOP1 starts at 2850 RPM, pr. >6ksc. Lub oil pr > 2.6 KSC. |
| 50 | HPT evacuation opens on auto with unit tripping & closes on auto at 2000 RPM. |
| 51 | Purge the boiler. |
| 52 | Close Boiler stop valve. |
| 53 | Close HP/LP bypass once line gets depressurized. |
| 54 | GT fans will trip on interlock, otherwise stop all fans. |
| 55 | Ensure closing of all Extraction. Valves & opening of all Ex. line drains to condenser.(Mal & Mot drain) |
| 56 | Ensure opening of CRH header drain(CRHV101)& NRV drain.(Mal 65) |
| 57 | Monitor All TSI parameters. (Shaft & Ped Vibrations, Expansion, Bearing temp, Speed) |
| 58 | Close BD valve, RH spray, SH spray manual isolating valve. |
| 59 | Ensure Closing of Boiler stop valve L&R. |
| 60 | Open Drains to flash tank. (MS/HRH strainer drain). MS & CRH pr is zero. |
| 61 | Ensure Condenser vacuum & SS temp >270C, Pr OK. |
| 62 | Monitor Lub oil temp control on auto & maintaining(>45 deg cent) |
| 63 | Maintain Hot well level normal. |
| 64 | Isolate TD BFP CRH & Auxiliary steam source. |
| 65 | Ensure starting of JOP-1 at 510 RPM. |
| 66 | Ensure B/G valve opens at 210 RPM |
| 67 | Note down coasting down time |
| 68 | Monitor LPT/HPT exhaust temp & HPT, IPT, LPT Expansion & DE. HPC/IPC top/Bot, HPS/IPS temp. |
| 69 | Slowly reduce deaerator pegging steam & close it. |
| 70 | Keep both CW pumps on service. |
| 71 | Maintain PW/CG differential temp by closing Temp control bypass valve otherwise isolate PW cooler. |
| 72 | Maintain expansion tank N2 pressure(.2ksc) & generator H2 pressure(3.4ksc) |
| 73 | One CEP can be stopped & one CEP can be kept in service. |
| 74 | Turbine comes on barring.(Speed 90-110RPM) |
| 75 | If barring speed constant, stop vacuum pump. |
| 76 | Note vacuum drop rate. |
| 77 | Operate partial vacuum breaker. |
| 78 | Ensure opening of MS & HRH drain to Unit flash tank & closing of MS/HRH drain to condenser FT. |
| 79 | Ensure |
| 80 | At -0.10 close seal steam, open leak steam. |
| 81 | Isolate seal steam for Turbine & TD BFP manual valve |
| 82 | Close isolating valve to GSC & open SV to atmosphere |
| 83 | Stop GSC EX fan.(Fan is to be stopped to avoid quenching through seals) |
| 84 | Turbine speed comes to 80 RPM & gets steady. |
| 85 | Keep one set of ID & FD fan in service till APH inlet temp comes to 205°C |
| 86 | Open SH header drain at 8KSC. |
| 87 | Open startup vent & Air vents at 2-3KSC |
| 88 | ESP fields can be made off with rapping on. |
| 89 | Stop ID & FD fan at 205C & carry out APH hot washing after ensuring opening of SA&PA duct drain & proper functioning of APH flushing apparatus. |
| 90 | Otherwise, Stop ID & FD fan & follow Boiler cooling procedure. |
| 91 | Stop CC pump when suction manifold temp reach 95°C |
| 92 | Close discharge valve of CC pump before draining Boiler |
| 93 | Carry out BAH deashing with proper flushing |
