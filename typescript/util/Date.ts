export function getTimeStringFromDate(date: Date): string {
    const hours = date.getHours();
    const amOrPm =  hours > 12
        ? 'PM'
        : 'AM';
    
    let minutes = String(date.getMinutes());
    if (date.getMinutes() < 10) minutes = '0' + minutes;
    
    return `${hours % 12}:${minutes} ${amOrPm}`;
}

export function getDateStringFromDate(date: Date): string {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    return `${month} ${day}`;
}