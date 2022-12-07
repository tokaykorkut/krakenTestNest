import { allOutageData, siteInfoData } from './fetch-data';

export const fetchAllOutageData = () =>
    new Promise<any[]>((resolve, reject) =>
        setTimeout(() => {
            resolve(allOutageData);
        }, 1000),
    );

export const fetchSiteInfoData = (siteId: string) => {
    new Promise<any>((resolve, reject) =>
        setTimeout(() => {
            const data = siteInfoData.find((value) => value.id === siteId);
            resolve(data);
        }, 1000),
    );
};

export const pushAllOutageInfoForOneSite = (
    siteId: string,
    bodyData: any[],
) => {
    new Promise<any>((resolve, reject) =>
        setTimeout(() => {
            const data = siteInfoData.find((value) => value.id === siteId);
            resolve(data);
        }, 1000),
    );
};
