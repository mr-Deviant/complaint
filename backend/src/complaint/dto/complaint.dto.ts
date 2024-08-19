import { ArrayMaxSize, IsArray, IsEmail, IsEnum, IsNotEmpty, MaxLength, ValidateIf } from 'class-validator';
import { ComplaintTypeEnum } from '../complaint-type.enum';

export class ComplaintDto {
  _id?: string;

  @IsNotEmpty()
  @IsEnum(ComplaintTypeEnum)
  type: ComplaintTypeEnum;

  userId: string | null;

  addedDate: Date;

  // photoUrls: string[];

  // @IsOptional() // Check if null or undefined
  @ValidateIf((complaint) => !!complaint.name)
  @MaxLength(100)
  name: string;

  // categoryId: string;

  @IsNotEmpty()
  countryCode: string;

  countryName: string | null;

  // @IsOptional() // Check if null or undefined
  @ValidateIf((complaint) => !!complaint.cityName)
  @MaxLength(100)
  cityName: string | null;

  cityUrl: string | null;

  @IsNotEmpty()
  @MaxLength(150)
  shortDescription: string;

  @IsNotEmpty()
  @MaxLength(2000)
  fullDescription: string;

  // Company, Person
  // personIds: number[];

  @ValidateIf((complaint) => [ComplaintTypeEnum.Company, ComplaintTypeEnum.Person].includes(complaint.type))
  @IsArray()
  @ArrayMaxSize(3)
  @MaxLength(20, {
    each: true,
  })
  phones: string[];

  @ValidateIf(
    (complaint) => [ComplaintTypeEnum.Company, ComplaintTypeEnum.Person].includes(complaint.type) && !!complaint.email,
  )
  // @IsOptional() // Check if null or undefined
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ValidateIf((complaint) => [ComplaintTypeEnum.Company, ComplaintTypeEnum.Person].includes(complaint.type))
  @IsArray()
  @ArrayMaxSize(4)
  // @IsFQDN({ each: true })
  @MaxLength(100, {
    each: true,
  })
  sites: string[];

  @ValidateIf((complaint) => complaint.type === ComplaintTypeEnum.Person)
  // @IsOptional() // Check if null or undefined
  @MaxLength(100)
  surname: string;

  @ValidateIf((complaint) => complaint.type === ComplaintTypeEnum.Person)
  // @IsOptional() // Check if null or undefined
  @MaxLength(100)
  patronymic: string;

  // Product
  @ValidateIf((complaint) => complaint.type === ComplaintTypeEnum.Product)
  // @IsOptional() // Check if null or undefined
  @MaxLength(50)
  barCode: string;
}
