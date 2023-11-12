export const secondsToHoursMinutes = (seconds: string): string => {
    const secondsToNumber = Number(seconds);
    const hours = Math.floor(secondsToNumber / 3600);
    const minutes = Math.floor((secondsToNumber % 3600) / 60);

    return `${hours}h ${minutes}m`;
}