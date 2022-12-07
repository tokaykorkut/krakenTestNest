import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { fetchAllOutageData } from 'src/utils/api-calls';
import { OutageDto } from 'src/utils/dtos';
import { ErrorMessageEnum } from 'src/utils/enums';

@Injectable()
export class OutageService {
    async getAllOutages(): Promise<OutageDto[]> {
        const data = await fetchAllOutageData();
        if (data === undefined) {
            throw new HttpException(
                ErrorMessageEnum.NOT_FOUND,
                HttpStatus.NOT_FOUND,
            );
        }
        return data;
    }
}
