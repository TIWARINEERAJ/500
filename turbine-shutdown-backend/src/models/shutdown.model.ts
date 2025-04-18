import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './user.model';

interface ShutdownSessionAttributes {
  id: number;
  plantId: number;
  startTime: Date;
  endTime?: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'aborted';
  initiatedBy: number;
  completedBy?: number;
}

class ShutdownSession extends Model<ShutdownSessionAttributes> implements ShutdownSessionAttributes {
  public id!: number;
  public plantId!: number;
  public startTime!: Date;
  public endTime?: Date;
  public status!: 'pending' | 'in-progress' | 'completed' | 'aborted';
  public initiatedBy!: number;
  public completedBy?: number;
}

ShutdownSession.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  plantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'in-progress', 'completed', 'aborted'),
    allowNull: false,
    defaultValue: 'pending'
  },
  initiatedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  completedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'ShutdownSession',
  tableName: 'shutdown_sessions',
  timestamps: true
});

export default ShutdownSession;
