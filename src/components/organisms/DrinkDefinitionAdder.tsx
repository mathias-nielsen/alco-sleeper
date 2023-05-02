import React, { useState } from "react";
import Circle from "@/components/atoms/Circle";
import AddIcon from "@mui/icons-material/Add";
import styles from "./DrinkDefinintionAdder.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addDefinition,
  DefinitionParts,
} from "@/store/slices/alcoEntriesSlice";

const getDefaultObject = () => ({
  title: "",
  size: "",
  strength: "",
});

const DrinkDefinitionAdder = () => {
  // Redux
  const dispatch = useDispatch();

  // Local state
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(getDefaultObject());
  const [definitionParts, setDefinitionParts] = useState<DefinitionParts>(
    getDefaultObject()
  );

  const handleReset = () => {
    setDefinitionParts(getDefaultObject());
    setErrors(getDefaultObject());
    setShow(false);
  };

  const handleChange = (input: any) => {
    setDefinitionParts((prev) => {
      return {
        ...prev,
        [input.target.name]: input.target.value,
      };
    });
  };

  const handleAdd = () => {
    const validated = validate();
    if (validated) {
      //@ts-ignore
      dispatch(addDefinition(definitionParts));
      handleReset();
    }
  };

  function validate() {
    const a = validatedTitle();
    const b = validatedSize();
    const c = validatedStrength();
    return a && b && c;
  }

  function validatedTitle() {
    let toReturn = false;
    if (definitionParts.title.length === 0) {
      setErrors((prev) => {
        return {
          ...prev,
          title: "Required",
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          title: "",
        };
      });
      toReturn = true;
    }
    return toReturn;
  }

  function validatedStrength() {
    let toReturn = false;
    let isStrengthANumber = /^\d+$/.test(definitionParts.strength);

    if (definitionParts.strength.length === 0) {
      setErrors((prev) => {
        return {
          ...prev,
          strength: "Required",
        };
      });
    } else if (!isStrengthANumber) {
      setErrors((prev) => {
        return {
          ...prev,
          strength: "Only numbers allowed",
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          strength: "",
        };
      });
      toReturn = true;
    }
    return toReturn;
  }

  function validatedSize() {
    let toReturn = false;
    let isSizeANumber = /^\d+$/.test(definitionParts.size);

    if (definitionParts.size.length === 0) {
      setErrors((prev) => {
        return {
          ...prev,
          size: "Required",
        };
      });
    } else if (!isSizeANumber) {
      setErrors((prev) => {
        return {
          ...prev,
          size: "Only numbers allowed",
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          size: "",
        };
      });
      toReturn = true;
    }
    return toReturn;
  }

  return (
    <>
      <Circle onClick={() => setShow(true)}>
        <AddIcon className={styles.addIcon} />
      </Circle>
      <Dialog open={show} onClose={handleReset}>
        <DialogTitle>New drink</DialogTitle>
        <DialogContent>
          <TextField
            error={errors.title !== ""}
            helperText={errors.title}
            value={definitionParts.title}
            onBlur={validatedTitle}
            onChange={handleChange}
            name={"title"}
            margin="normal"
            label="Description"
            variant="standard"
            fullWidth
          />
          <div className={styles.numbers}>
            <TextField
              onBlur={validatedSize}
              error={errors.size !== ""}
              helperText={errors.size}
              value={definitionParts.size}
              name={"size"}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ml</InputAdornment>
                ),
              }}
              className={styles.input}
              label="Size"
              margin="normal"
              variant="standard"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <TextField
              onBlur={validatedStrength}
              label="Strength"
              name={"strength"}
              error={errors.strength !== ""}
              helperText={errors.strength}
              value={definitionParts.strength}
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              margin="normal"
              variant="standard"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DrinkDefinitionAdder;
