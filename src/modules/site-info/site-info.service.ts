import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { fetchSiteInfoData } from 'src/utils/api-calls';
import { SiteInfoDto } from 'src/utils/dtos';
import { ErrorMessageEnum } from 'src/utils/enums';

@Injectable()
export class SiteInfoService {
    async getOneSiteInfo(siteId: string): Promise<SiteInfoDto> {
        const data = await fetchSiteInfoData(siteId);
        if (data === undefined) {
            throw new HttpException(
                ErrorMessageEnum.NOT_FOUND,
                HttpStatus.NOT_FOUND,
            );
        }
        return data;
    }
}
