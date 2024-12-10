import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity('rac_driver')
  export class RacDriver {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'driver_name', type: 'varchar', length: 255, nullable: false })
    driverName: string;
  
    @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: false })
    phoneNumber: string;
  }
  
  @Entity('rac_vehicle')
  export class RacVehicle {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'vehicle_name', type: 'varchar', length: 255, nullable: true })
    vehicleName: string;
  
    @Column({ name: 'vehicle_number', type: 'varchar', length: 255, nullable: true })
    vehicleNumber: string;
  
    @Column({ name: 'vehicle_type', type: 'varchar', length: 50, nullable: true })
    vehicleType: string;
  
    @Column({ name: 'driver_id', type: 'int', nullable: true })
    driverId: number;
  
    @ManyToOne(() => RacDriver)
    @JoinColumn({ name: 'driver_id' })
    driver: RacDriver;
  }
  