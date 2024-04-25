const useDate = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const now = new Date();
    const rareDate = now.getTime();
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const formattedDate = `${months[now.getMonth()].substring(
        0,
        3
    )} ${now.getDate()}, ${now.getFullYear()} ${padZero(
        now.getHours()
    )}:${padZero(now.getMinutes())}`;
    return [rareDate, formattedDate];
};

export default useDate;
