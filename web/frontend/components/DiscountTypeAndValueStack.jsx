//write a component that will display the discount type and value
//this component will be used in the Discount Creation page

import React, { useCallback, useState } from "react";
import { Stack, RadioButton, TextField } from "@shopify/polaris";

export function DiscountTypeAndValueStack({ dtvsid }) {
    const [discountType, setDiscountType] = useState("percentage_" + dtvsid);
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
                    checked={discountType === "percentage_" + dtvsid}
                    id={"percentage_" + dtvsid}
                    name={"rb1_" + dtvsid}
                    onChange={handleDiscountTypeChange}
                />
            </Stack.Item>
            <Stack.Item>
                <RadioButton
                    label="Value"
                    helpText="Apply fixed value discount"
                    id={"value_" + dtvsid}
                    name={"rb2_" + dtvsid}
                    checked={discountType === "value_" + dtvsid}
                    onChange={handleDiscountTypeChange}
                />
            </Stack.Item>
            <Stack.Item fill>
                <TextField
                    label={
                        discountType === "percentage_" + dtvsid
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
