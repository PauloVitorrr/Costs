import { useState, useEffect } from 'react'


import SubmitButton from '../form/SubmitButton'
import Input from '../form/Input'

import Select from '../form/Select'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
        
    useEffect(() => {   
        fetch ("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        })  .then((resp) => resp.json())
            .then((data) => {
                setCategories (data)
            })
            .catch((err) => console.log (err))
    
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
         handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
        
    }

    function handleCategory(e){
        setProject({ ...project,category : {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text, 
        },
    })
        
    }

    return (
        <form onSubmit= {submit} className={styles}>
        <Input type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value = {project.name ? project.name: ''}
        />
        <Input type="Number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value = {project.budget ? project.budget: ''}
        />
        <div>
       <Select name="category_id"
        text="Selecione a categoria " 
        options={categories}
        handleOnChange={handleCategory}
        value = {project.category ? project.category.id : ''}
        />
        </div>
        <SubmitButton text={btnText}/>
        </form>
        )
}

export default ProjectForm