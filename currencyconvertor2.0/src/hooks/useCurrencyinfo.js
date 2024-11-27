import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!currency) return; // Prevent fetch if currency is not defined

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                return res.json();
            })
            .then((res) => {
                console.log("Fetched data:", res[currency]);
                setData(res[currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
