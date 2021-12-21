import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import FilterContainer from "../FilterContainer/FilterContainer";
import PhoneList from "../../Contexts/phonesContext";
import PostList from "../../Contexts/postContext";
import { BrandInput, ModelInput } from "../FilterInput/FilterInput";

function Filter({ active }) {
  const PostListContext = useContext(PostList);
  const history = useHistory();

  const [lowPrice, setLowPrice] = useState();
  const [highPrice, setHighPrice] = useState();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  function fillterPosts() {
    PostListContext.applyFilters({ brand, model, lowPrice, highPrice });
    history.push("/search");
  }

  return (
    <FilterContainer.Container active={active}>
      <FilterContainer.FormContainer formTitle="Brand">
        <BrandInput setBrand={setBrand} />
      </FilterContainer.FormContainer>

      <FilterContainer.FormContainer formTitle="Model">
        <ModelInput setModel={setModel} />
      </FilterContainer.FormContainer>

      <FilterContainer.FormContainer formTitle="Cena">
        <FilterContainer.PriceBox>
          <FilterContainer.PriceInput
            onChange={(e) => setLowPrice(e.target.value)}
            placeholder="Price From"
            type="number"
          />
          <FilterContainer.PriceInput
            onChange={(e) => setHighPrice(e.target.value)}
            placeholder="Up To Price"
            type="number"
          />
        </FilterContainer.PriceBox>
      </FilterContainer.FormContainer>
      <FilterContainer.FormContainer formTitle="Izaberite">
        <FilterContainer.CheckboxContainer>
          <FilterContainer.Checkbox type="checkbox" value="novo">
            New
          </FilterContainer.Checkbox>
          <FilterContainer.Checkbox type="checkbox" value="koriceno">
            Used
          </FilterContainer.Checkbox>
          <FilterContainer.Checkbox type="checkbox" value="sve">
            All
          </FilterContainer.Checkbox>
        </FilterContainer.CheckboxContainer>
      </FilterContainer.FormContainer>
      <FilterContainer.SubmitButton onClick={fillterPosts}>
        Apply Filters
      </FilterContainer.SubmitButton>
    </FilterContainer.Container>
  );
}

export default Filter;
