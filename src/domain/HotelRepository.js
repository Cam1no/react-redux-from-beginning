import axios from 'axios';
import APPLICATION_ID from '../Credential';
import geolib from 'geolib';

const RAKUTEN_HOTEL_ENDPOINT = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426';

export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: APPLICATION_ID,
    latitude: location.lat,
    longitude: location.lng,
    datumType: 1,
  }
  return (
    axios
      .get(RAKUTEN_HOTEL_ENDPOINT, { params })
      .then((results) => {
        const data = results.data;
        return data.hotels.map((hotel) => {
          const hotelBasicInfo = hotel.hotel[0].hotelBasicInfo;
          const distance = geolib.getDistance(
            { latitude: location.lat, longitude: location.lng },
            { latitude: hotelBasicInfo.latitude, longitude: hotelBasicInfo.longitude },
          );
          console.log(hotelBasicInfo);
          return {
            id: hotelBasicInfo.hotelNo,
            name: hotelBasicInfo.hotelName,
            url: hotelBasicInfo.hotelInformationUrl,
            minPrice: hotelBasicInfo.hotelMinCharge,
            reviewAverage: hotelBasicInfo.reviewAverage,
            reviewCount: hotelBasicInfo.reviewCount,
            thumbnail: hotelBasicInfo.hotelThumbnailUrl,
            distance,
          }
        })
      }
    )
  );
}

export default searchHotelByLocation;
