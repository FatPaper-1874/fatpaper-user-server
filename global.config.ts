import {
	__TC_SECRETID__ as tc_id,
	__TC_SECRETKEY__ as tc_key,
	__TC_BUCKET_NAME__ as tc_bn,
	__TC_REGION__ as tc_r,
} from "../tencent-cloud";
import { USER_SERVER_URL } from "../global.config";

export const __TC_ID__ = tc_id;
export const __TC_KEY__ = tc_key;
export const __TC_BUCKET_NAME__ = tc_bn;
export const __TC_REGION__ = tc_r;

export const __FATPAPERUSERSERVERHOST__ = USER_SERVER_URL;
