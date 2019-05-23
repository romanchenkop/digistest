import L from 'leaflet';

export const organizationIcon = L.icon({
  iconUrl: 'https://image.flaticon.com/icons/png/512/37/37134.png',
  iconSize: [30, 30],
});

export const userIcon = L.icon({
  iconUrl:
    'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png',
  iconSize: [60, 60]
});

export const myIcon = L.icon({
  iconUrl:
    'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png',
  iconSize: [60, 60],
  iconAnchor: [29, 50],
  popupAnchor: [0, -41]
});
