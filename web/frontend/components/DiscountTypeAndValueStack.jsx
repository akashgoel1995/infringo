//write a component that will display the discount type and value
//this component will be used in the Discount Creation page

import React, { useCallback, useState } from "react";
import { Stack, RadioButton, TextField } from "@shopify/polaris";

export function DiscountTypeAndValueStack() {
    const [discountType, setDiscountType] = useState("percentage");
    const [discountAmount, setDiscountAmount] = useState("");
    const handleDiscountAmountChange = (value) => {
        setDiscountAmount(value);
    };

    const handleDiscountTypeChange = useCallback(
        (_checked, newValue) => setDiscountType(newValue),
        []
    );
    return (
        <Stack spacing="loose">
            <Stack.Item>
                <RadioButton
                    label="Percentage"
                    helpText="Apply % based discount"
                    checked={discountType === "percentage"}
                    id="percentage"
                    name="rb1"
                    onChange={handleDiscountTypeChange}
                />
            </Stack.Item>
            <Stack.Item>
                <RadioButton
                    label="Value"
                    helpText="Apply fixed value discount"
                    id="value"
                    name="rb2"
                    checked={discountType === "value"}
                    onChange={handleDiscountTypeChange}
                />
            </Stack.Item>
            <Stack.Item fill>
                <TextField
                    label={
                        discountType === "percentage"
                            ? "Discount Percentage (%)"
                            : "Discount Value (₹)"
                    }
                    type="number"
                    value={discountAmount}
                    onChange={handleDiscountAmountChange}
                />
            </Stack.Item>
        </Stack>
    );
}
