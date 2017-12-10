import axios from 'axios';
import APPLICATION_ID from '../Credential';
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
        const status = results.status;
        const data = results.data;
        return data.hotels.map((hotel) => {
          const hotelBasicInfo = hotel.hotel[0].hotelBasicInfo;
          return {
            id: hotelBasicInfo.hotelNo,
            name: hotelBasicInfo.hotelName,
            url: hotelBasicInfo.hotelInformationUrl,
          }
        })
      }
    )
  );
}

export default searchHotelByLocation;
