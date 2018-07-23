import { Message } from 'element-ui';


export const errorTip = msg => {
	Message.error(msg);
}


export const successTip = msg => {
	Message.success(msg);
}


export const infoTip = msg => {
	Message.info(msg);
}


export const warningTip = msg => {
	Message.warning(msg);
}

