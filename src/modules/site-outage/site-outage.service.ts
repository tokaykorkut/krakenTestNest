import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pushAllOutageInfoForOneSite } from 'src/utils/api-calls';
import { EnhancedOutageDto } from 'src/utils/dtos';
import { ErrorMessageEnum } from 'src/utils/enums';

@Injectable()
export class SiteOutageService {
    async addAllOutageInfoForOneSite(
        siteId: string,
        bodyData: EnhancedOutageDto[],
    ): Promise<void> {
        const data = await pushAllOutageInfoForOneSite(siteId, bodyData);
        if (data === undefined) {
            throw new HttpException(
                ErrorMessageEnum.NOT_FOUND,
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
