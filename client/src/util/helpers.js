import { ONLY_ALPHABETS_PATTERN, PHONE_PATTERN, PINCODE_PATTERN, ADDRESS_PATTERN } from './regexPatterns';

export const validateName = (name) => {
    return ONLY_ALPHABETS_PATTERN.test(name);
}
export const validatePhone = (phone) => {
    return PHONE_PATTERN.test(phone);
}
export const validateAddress = (address) => {
    return ADDRESS_PATTERN.test(address);
}
export const validatePincode = (pin) => {
    return PINCODE_PATTERN.test(pin);
}