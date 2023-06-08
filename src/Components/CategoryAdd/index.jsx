import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Category from "../../Database/Model/Category";

import { CategoryCell } from "./CategoryCell";
import { OutlinedChip } from "../Chips";
import PlusIcon from "../../Assets/SVGIcons/PlusIcon";
import PlusBlackIcon from "../../Assets/SVGIcons/PlusBlackIcon";
import { SaveCloseController } from "../SaveCloseController";

import { Colors } from "../../Theme/Variables";
import styles from "./styles";

export const CategoryAdd = ({
                              handleCloseCategoryAddModal,
                              onCategoryAdd,
                              categoryCreateEditModalRef,
                              selectedCategoryIndex,
                              setSelectedCategoryIndex,
                            }) => {

    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
      getCategories();
    }, []);

    const getCategories = async () => {

      let categories = await Category.getAllActiveCategories();
      if (categories.length > 1) {
        setCategoryList(categories);

      }
    };

    return (
      <SafeAreaView style={styles.parentContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.accountText}>Choose category</Text>
          <ScrollView>
            <>
              <View style={styles.categoryContainer}>
                {categoryList?.map((item, idx) => {
                  return item.name !== "Unspecified" ? (
                    <TouchableOpacity
                      style={[styles.categoryCell, {
                        borderColor: item.id === selectedCategoryIndex ? Colors.primaryBlack : Colors.primaryGray,
                        backgroundColor: item.id === selectedCategoryIndex ? item.color : Colors.primaryGray,
                      }]}
                      key={idx}
                      onPress={async () => {
                        if (selectedCategoryIndex === item.id) {
                          setSelectedCategoryIndex(-1);
                        } else {
                          onCategoryAdd(item.id, item.name, item.color, item.icon);
                          setSelectedCategoryIndex(item.id);
                        }
                      }}>

                      <CategoryCell name={item.name} color={item.color} isSelected={item.id === selectedCategoryIndex} icon={item.icon} />

                    </TouchableOpacity>
                  ) : null;
                })}
              </View>
              <View style={{ margin: 10, width: 170 }}>
                <OutlinedChip
                  icon={<PlusBlackIcon />}
                  name={"Add New"}
                  onPress={() => {
                    handleCloseCategoryAddModal(selectedCategoryIndex);
                    categoryCreateEditModalRef.current.present();
                  }}
                />
              </View>
            </>
          </ScrollView>
        </View>
        <View>
          <SaveCloseController
            handleClose={() => handleCloseCategoryAddModal(selectedCategoryIndex)}
            handleSubmit={() => handleCloseCategoryAddModal(selectedCategoryIndex)}
            submitButtonText={"Skip"}
            submitButtonIcon={<PlusIcon />}
          />
        </View>
      </SafeAreaView>
    );
  }
;
