const Brand =  require("../models/brand.model");


const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        console.log(error);
    }
};

const createBrands = async (req, res) => {
    try {    
        const { name, description } = req.body;        

        const newBrand = new Brand({
            name: name,
            description: description,
        });
        const savedBrand = await newBrand.save();

        res.json({
            message: "Brand created successfully",
            brand: savedBrand,
        });
    } catch (error) {  
        console.log(error);
    }
};

const deleteBrandById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);
        
        if (!deletedBrand) {
            return res.json({ message: "Brand not found" });
        }
        else{
            res.json({ message: "Brand deleted successfully",  deletedBrand });
        }
       
    } catch (error) {
       console.log(error);
    }
};

const updateBrandById = async (req, res) => {
    const { id } = req.params;  
    const { name, description } = req.body; 

    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            id,
            { name, description },
        );

        res.json({ message: "Brand updated successfully", updatedBrand });
    } catch (error) {    
        console.log(error)
    }
};


module.exports = { createBrands , getAllBrands ,deleteBrandById ,updateBrandById };

