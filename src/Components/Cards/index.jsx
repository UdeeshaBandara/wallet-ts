import React, { useMemo } from "react";
import { Text, View } from "react-native";

import { getTextColor, getFormattedBalance, getIconByName } from "../../Util/Common";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons";
import Gradient from "../Gradient/index";
import { RoundIcon } from "../index";
import SelectedIcon from "../../Assets/SVGIcons/SelectedIcon";

import { useTheme } from "../../Theme";
import styles from "./styles";


const GradientCard = props => {
  const { Layout } = useTheme();

  return (
    <View style={styles.cardView}>
      <Gradient
        colors={props.bgColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.card}>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.fullHeight,
            ]}>
            <View
              style={[
                Layout.column,
                Layout.justifyContentBetween,
                { maxWidth: 200 },
              ]}>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.currency}>{props.currency}</Text>
            </View>
            <View style={[Layout.rowCenter]}>
              <SelectedIcon />
              <Text style={styles.status}>{props.status}</Text>
            </View>
          </View>
        </View>
      </Gradient>
    </View>
  );
};

const Card = ({
                title,
                balance = "",
                currency,
                screenName,
                percentage = "",
                isSelectedCategory = false,
                colorCode = "",
                icon,
              }) => {
  const { Colors } = useTheme();
  const loadAccountAndCategoryIcons = useMemo(() => {
    return AccountAndCategoryIcons;
  }, []);

  function formatBgBrightness(hex, percent) {

    hex = hex.replace(/^\s*#|\s*$/g, "");

    if (hex.length === 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }

    const r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);

    return "#" +
      ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substring(1) +
      ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substring(1) +
      ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substring(1);
  }


  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: isSelectedCategory
            ? colorCode
            : ((colorCode !== "" && screenName === "account") ? colorCode : Colors.gray6),
        },
      ]}>
      <RoundIcon
        icon={getIconByName(icon, loadAccountAndCategoryIcons, colorCode)}
        iconBg={((colorCode === Colors.primaryYellow && screenName === "account") ? "#ABA539" : (screenName === "account" ? formatBgBrightness(colorCode, 50) : colorCode))}
      />
      <View>
        {screenName !== "transaction" ? (
          <View style={styles.content}>
            <Text
              style={[
                styles.boldText,
                (balance === "" || (colorCode === Colors.primaryYellow || colorCode === Colors.primaryLightBlue || colorCode === Colors.lightPink)) && { color: Colors.primaryBlack },
              ]}>
              {title}
            </Text>
            {!balance == "" && (
              <Text style={[styles.text1, { color: getTextColor(colorCode) }]}>
                <Text
                  style={[styles.boldText, { color: getTextColor(colorCode) }]}>{getFormattedBalance(balance)}</Text>{" "}
                {currency}
              </Text>
            )}
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.rowContent}>
              <Text
                style={[
                  styles.text1,
                  {
                    color: (isSelectedCategory)
                      ? getTextColor(colorCode)
                      : Colors.primaryBlack,
                    flexGrow: 2,
                    flexBasis: 0,
                  },
                ]}>
                {title}
              </Text>
              <Text
                style={[
                  styles.text1,
                  {
                    color: (isSelectedCategory)
                      ? getTextColor(colorCode)
                      : Colors.primaryBlack,
                    flexGrow: 1,
                    flexBasis: 0,
                  },
                ]}>
                {percentage}
              </Text>
            </View>
            <Text
              style={[
                styles.text1,
                {
                  color: (isSelectedCategory)
                    ? getTextColor(colorCode)
                    : Colors.primaryBlack,
                },
              ]}>
              <Text
                style={[
                  styles.boldText,
                  {
                    color: (isSelectedCategory)
                      ? getTextColor(colorCode)
                      : Colors.primaryBlack,
                  },
                ]}>
                {getFormattedBalance(balance)}
              </Text>{" "}
              {currency}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export { GradientCard, Card };
