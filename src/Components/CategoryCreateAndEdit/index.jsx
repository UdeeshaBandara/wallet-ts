import React, { useMemo, useRef, useState } from "react";
import { Platform, Text, View } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

import Category from "../../Database/Model/Category";

import { getIconByName } from "../../Util/Common";
import {
  AccountAndCategoryIconPicker,
  BottomSheet,
  ColorPicker,
  RoundIconButton,
  SaveCloseController,
} from "../index";

import { AccountAndCategoryIcons } from "../../Assets/SVGIcons/AccountAndCategoryIcons/index";
import PlusIcon from "../../Assets/SVGIcons/PlusIcon";
import SaveIcon from "../../Assets/SVGIcons/SaveIcon";

import { useTheme } from "../../Theme";
import styles from "./styles";


export const CategoryCreateAndEdit = ({
                                        categoryCreateEditModalRef,
                                        onChange,
                                        handleCloseModal,
                                        type,
                                        existingDetails = {},
                                      }) => {
  const { Colors, Layout } = useTheme();

  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "ios" ? "55" : "62%"],
    [],
  );
  const loadAccountAndCategoryIcons = useMemo(()=>{
    return AccountAndCategoryIcons;
  },[])

  const iconPickerModalRef = useRef(null);

  const [categoryObj, setCategoryObj] = useState({
    name: type === "edit" ? existingDetails.name : "",
    color: type === "edit" ? existingDetails.color : Colors.primaryPurple,
    icon: type === "edit" ? existingDetails.icon : "DefaultCategoryIcon",
  });
  const [iconPickerKey, setIconPickerKey] = React.useState(0);

  const handleShowIconPicker = React.useCallback(() => {
    iconPickerModalRef?.current.present();
  }, []);

  const handleCloseIconPicker = React.useCallback(() => {
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, []);

  const handleSubmitIconPicker = React.useCallback((icon) => {

    setCategoryObj({ ...categoryObj, icon: icon })
    iconPickerModalRef?.current.close();
    setIconPickerKey(Math.random());
  }, [categoryObj.name,categoryObj.color]);


  const updateCategory = async () => {

    await Category.updateCategoryById(existingDetails.id,categoryObj);

    handleCloseModal(existingDetails.id,categoryObj.name,categoryObj.color);
    resetState();
  };
  const addCategoriesToDb = async () => {

    let result = await Category.addCategoryToDb(categoryObj);

    handleCloseModal(result._raw.id,categoryObj.name,categoryObj.color,categoryObj.icon);
    resetState();
  };

  const resetState = () => {
    setCategoryObj({
      ...categoryObj,
      name: "",
      color: Colors.primaryPurple,
      icon: "",
    });
  };


  return (
     <BottomSheet
      bottomSheetModalRef={categoryCreateEditModalRef}
      snapPoints={snapPoints}
      onChange={onChange}>
      <View style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>
            {type === "create" ? "Create category" : "Edit category"}
          </Text>
          <View style={[Layout.rowHCenter, styles.categoryNameIconView]}>
            <RoundIconButton
              icon={getIconByName(categoryObj.icon, loadAccountAndCategoryIcons, categoryObj.color)}
              bgColor={categoryObj.color}
              isSmall={true}
              onPress={handleShowIconPicker}
            />
            <BottomSheetTextInput
              placeholder="Category name"
              placeholderTextColor={Colors.gray002}
              style={styles.input}
              value={categoryObj.name}
              onChangeText={text =>
                setCategoryObj({ ...categoryObj, name: text })
              }
            />
          </View>
          <View style={styles.colorContainer}>
            <Text style={styles.txtColor}>Choose color</Text>
            <View style={styles.colorView}>
              <ColorPicker
                onPickColor={item =>
                  setCategoryObj({ ...categoryObj, color: item })
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <SaveCloseController
            handleClose={handleCloseModal}
            submitButtonText={type === "create" ? "Add" : "Save"}
            disabled={categoryObj.name === ""}
            submitButtonIcon={
              type === "create" ? (
                <PlusIcon isWhite={true} />
              ) : (
                <SaveIcon isWhite={true} />
              )
            }
            handleSubmit={type === "edit" ? updateCategory : addCategoriesToDb}
          />
        </View>
      </View>
      <AccountAndCategoryIconPicker bottomSheetRef={iconPickerModalRef} key={iconPickerKey}  closeBottomSheet={handleCloseIconPicker} colorCode={categoryObj.color} pickedIcon={categoryObj.icon} handleSubmit={handleSubmitIconPicker}  />
    </BottomSheet>
  );
};
