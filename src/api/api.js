import { post, get } from './http'
// 获取类别
export const getCategory = query => get('category-info', query);

// 获取排名
export const getRank= query => get(`rank/${query}`);
